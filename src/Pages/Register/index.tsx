import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Register() {
  const history = useHistory();
  const [state, setstate] = useState({
    name: "",
    email: "",
    password: "",
    confirmPasword: "",
  });

  const handleSubmit = async () => {
    // let form = { ...state};
    //  data.preventDefault();
    // history.push("/login");

    try {
      let form = { ...state };
      console.log("form", form);
      const response = await fetch(
        "https://phone-book-api.herokuapp.com/api/v1/signup",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: "",
          // },
          body: JSON.stringify(form),
        }
      );
      const res = await response.json();
      console.log("res>>", res);
      setstate({
        name: "",
        email: "",
        password: "",
        confirmPasword: "",
      });
      //   alert("success", res.status);
    } catch (err) {
      //    alert("error", err.message);
    }
  };
//   const handleChange = () => {
//     setstate({ ...state, [target.name]: target.value });
//   }
  return (
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <div className="container-login-left">
          <div className="logo-contact"></div>
        </div>

        <div className="container-login-right">
          <div className="box-login">
            <Typography className="typography">REGISTER</Typography>
            <TextField
              value={state.name}
              InputProps={{
                className: "textfield",
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Name"
              variant="outlined"
              className="textfield-name"
            />
            <TextField
              value={state.email}
              InputProps={{
                className: "textfield",
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Email"
              variant="outlined"
              className="textfield-name"
            />
            <TextField
              value={state.password}
              InputProps={{
                className: "textfield",
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              variant="outlined"
              className="textfield-name"
            />
            <Button type="submit" className="btn-register">
              REGISTER
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
