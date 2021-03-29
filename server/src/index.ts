import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import session from "express-session";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const GitHubStrategy = require("passport-github").Strategy;

const app = express();

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected successfully!");
  }
);

//MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
  return done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  return done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      cb(null, profile);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_API_KEY,
      consumerSecret: process.env.TWITTER_SECRET_KEY,
      callbackURL: "/auth/twitter/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      cb(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      cb(null, profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/getuser", (req, res) => {
  res.send(req.user);
});

app.listen(4000, () => {
  console.log("Server started");
});
