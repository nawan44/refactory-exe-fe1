import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainApp from "../Main";
import {  Register, Login, Favorit } from "../Pages";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/favorit" exact>
              <Favorit/>
            </Route>

        <Route path="/contact">
          <MainApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
