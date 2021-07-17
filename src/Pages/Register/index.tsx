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
  interface MyObject {
    name: string;
    email: string;
    password: string;
    confirmPasword: string;
  }

  const [state, setState] = useState<MyObject>({
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
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(form),
        }
      );
      const res = await response.json();
      console.log("res>>", res);
      setState({
        name: "",
        email: "",
        password: "",
        confirmPasword: "",
      });
        alert( res.status);
    } catch (err) {
         alert(err.message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
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
              name="name"
              id="name"
              onChange={handleChange}
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
              name="email"
              id="email"
              onChange={handleChange}
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
              name="password"
              id="password"
              onChange={handleChange}
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
            <TextField
              value={state.confirmPasword}
              name="confirmPasword"
              id="confirmPasword"
              onChange={handleChange}
              InputProps={{
                className: "textfield",
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Confirm Password"
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
