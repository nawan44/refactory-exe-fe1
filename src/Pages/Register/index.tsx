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

  const [dataUser, setDataUser] = useState<MyObject>({
    name: "",
    email: "",
    password: "",
    confirmPasword: "",
  });
  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const data = {
      name: dataUser?.name,
      email: dataUser?.email,
      password: dataUser?.password,
      confirmPasword: dataUser?.confirmPasword
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch('https://phone-book-api.herokuapp.com/api/v1/signup', requestOptions)
      const res = await response.json()
      console.log(res.data)
      alert(res.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
   
//('https://phone-book-api.herokuapp.com/api/v1/signup')
  
  const handleChange = (e: any): void => {
    e.preventDefault();
    const { name, email, password, confirmPassword, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
      [email]: value,
      [password]: value,
      [confirmPassword]: value,
    });
  };
  return (
    <div className="container-login">
      <form >
        <div className="container-login-left">
          <div className="logo-contact"></div>
        </div>

        <div className="container-login-right">
          <div className="box-login">
            <Typography className="typography">REGISTER</Typography>
            <TextField
              value={dataUser.name}
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
              value={dataUser.email}
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
              value={dataUser.password}
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
              value={dataUser.confirmPasword}
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
            <Button type="submit" onClick={handleFormSubmit} className="btn-register">
              REGISTER
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
