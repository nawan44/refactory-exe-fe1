import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Login() {
  const history = useHistory();
  interface MyObject {
    email: string;
    password: string;
  }
  const [dataUser, setDataUser] = useState<MyObject>({
    email: "",
    password: "",
  });
  console.log("data user", dataUser);
  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push("/login");
    const data = {
      email: dataUser?.email,
      password: dataUser?.password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://phone-book-api.herokuapp.com/api/v1/signin",
        requestOptions
      );
      const res = await response.json();
      console.log(res.data);
      alert("Berhasil Login");
      history.push("/contact");

    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  const handleChange = (e: any): void => {
    e.preventDefault();
    const { name, email, password,  value } = e.target;

    setDataUser({
      ...dataUser,
      [name]: value,
      [email]: value,
      [password]: value,
    });
  };

  return (
    <div className="container-login">
      <div className="container-login-left">
        <div className="logo-contact"></div>
      </div>
      <div className="container-login-right">
        <div className="box-login">
          <Typography className="typography">LOGIN</Typography>
          <TextField
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
            value={dataUser.email}
            name="email"
            id="email"
            onChange={handleChange}
          />
          <TextField
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
            style={{ color: "#fff" }}
            className="textfield-name"
            value={dataUser.password}
            name="password"
            id="password"
            onChange={handleChange}

          />
          <Button
            type="submit"
            onClick={handleFormSubmit}
            className="btn-login"
          >
            <Link
              to="/contact"
              style={{
                margin: "0 10px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {" "}
              Login{" "}
            </Link>{" "}
          </Button>
          <Button className="btn-login">
            <Link
              to="/register"
              style={{
                margin: "0 10px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {" "}
              register{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
