import React, { ReactElement } from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Home, Person, Assignment } from "@material-ui/icons";
import { NavLink, useLocation, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../../../Assets/style/pages.css";
import { ListItem, InputBase, Button } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    abRoot: {
      backgroundColor: "#05466A",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    search: {
      width: "20%",

      float: "right",
      textAlign: "right",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    ul: {
      listStyleType: "none",
    },
    a: {
      width: "100px",
      float: "left",
      fontSize: "20px",
      padding: "10px",
      position: "relative",
      color: "#fff",
      textDecoration: "none",
      margin: "0 10px",
      "&:visited": {
        color: "green",
        textDecoration: "none",
      },
      "&:hover": {
        color: "#000",
        textDecoration: "none",
      },
      "&:before": {
        content: "",
        position: "absolute",
        width: " 100%",
        height: "4px",
        bottom: "-2px",
        left: 0,
        backgroundColor: " #000",
        visibility: "hidden",
        transform: "scaleX(0)",
        transition: "all 0.3s ease-in-out 0s",
      },
    },
    under: {
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
      "&:active": {
        textDecoration: "underline",
      },
      "&:visited": {
        textDecoration: "underline",
      },
      
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);
const dataMenu = [
  {
    path: "/",
    text: "Home",
    icon: <Home />,
    // role: "admin"
  },
  {
    path: "/contact",
    text: "Contact",
    // role: ["prod", "admin"],
    icon: <Person />,
  },

  {
    path: "/favorit",
    text: "Favorit",
    // role: ["supp", "admin"],
    icon: <Assignment />,
  },
];

export default function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          root: classes.abRoot,
        }}
        position="static"
      >
        <Toolbar>
          <div className="link">
                {/* <NavLink 
                  to="/contact"
                  className={classes.under}
                  activeClassName="underline"
                >
                  Contact
                </NavLink >{" "} */}
       <a href="/contact" className="a">Contact</a>
                <NavLink 
                  to="/favorit"
                  className={classes.under}
                  activeClassName="underline"
                >
                  Favorit
                </NavLink >
       
          </div>
          {/* <div className= {classes.link}>
         <Link
            to="/contact"
            className="appbar-contact"
            style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
          >
            {" "}
            Contact{" "}
          </Link>
          <Link
            to="/favorit"
            style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
          >
            {" "}
            favorit{" "}
          </Link>
         </div> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
