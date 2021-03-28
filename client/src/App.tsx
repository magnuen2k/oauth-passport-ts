import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import LoginPage from "./Components/LoginPage/LoginPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
