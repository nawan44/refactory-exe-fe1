import { makeStyles } from "@material-ui/styles";
import Topbar  from "../Component/Layout/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
} from "react-router-dom";
import React from "react";

import { ExitToApp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
// import {  Favorit, Contact, AddContact } from "../Pages";
import Contact from "../Pages/Contact"
import Favorit from "../Pages/Favorit"
import AddContact from "../Pages/Contact/AddContact"

import { StylesProvider } from "@material-ui/core/styles";
import "../Assets/style/login.css";
import "../Assets/style/pages.css";
import "../Assets/style/input.css"

const useStyles = makeStyles((theme) => ({
  logout: {
    width: 30,
    height: 30,
    position: "fixed",
    margin: "10px 50px 10px 0",

    "&:hover": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
    "&:active": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
  },
}));
const MainApp = () => {
  let history = useHistory();
  const classes = useStyles();

  return (
      <Router>
            <Switch>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/add-contact" exact>
                <AddContact />
              </Route>
              <Route path="/favorit" exact>
                <Favorit />
              </Route>
            </Switch>
      </Router>
  );
};

export default MainApp;
