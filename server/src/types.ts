export interface IUser {
  googleId?: String;
  twitterId?: String;
  githubId?: String;
  username?: String;
}

export interface IMongoDBUser {
  googleId?: String;
  twitterId?: String;
  githubId?: String;
  username?: String;
  __v: number;
  _id: string;
}
