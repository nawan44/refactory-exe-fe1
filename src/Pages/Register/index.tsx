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
import { NavLink } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  interface MyObject {
    name: string;
    email: string;
    password: string;
    confirmPasword: string;
  }
  // interface Pass {
  //   type: string[] ;
  //    }
  const [dataUser, setDataUser] = useState<MyObject>({
    name: "",
    email: "",
    password: "",
    confirmPasword: "",
  });
  console.log("data user", dataUser);
  // const [errorData, setErrorData] =  useState<Pass[]>([])
  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push("/login");
    const data = {
      name: dataUser?.name,
      email: dataUser?.email,
      password: dataUser?.password,
      confirmPasword: dataUser?.confirmPasword,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://phone-book-api.herokuapp.com/api/v1/signup",
        requestOptions
      );
      const res = await response.json();
      console.log(res.data);
      alert("Berhasil Mendaftar");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  const handleChange = (e: any): void => {
    e.preventDefault();
    const { name, email, value } = e.target;

    setDataUser({
      ...dataUser,
      [name]: value,
      [email]: value,
    });
  };
  // const handleChangePass = (e: any): void => {
  //   e.preventDefault();
  //   // setValue: (value: string) => void;
  //   const { password, confirmPassword, value } = e.target;
  //   let text = e.target.value;
  //   let reg = /^([A-Za-z0-9]{1,4})(\s|-)*([0-9]{1,5})(\s|-)*([A-Za-z]{0,3})$/i;
  //   if ((text === "" || reg.test(text)) && text.length == 8) {
  //     setErrorData("");
  //     setDataUser({
  //       ...dataUser,
  //       [password]: value,
  //       [confirmPassword]: value,
  //     });
  //   } else {
  //     setErrorData("❌ Panjang Password 8 karakter");
  //   }    console.log(text);

  // };
  return (
    <div className="container-login">
      <form>
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
              // multiline
              // rows={5}
              // rowsMax={10}
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
              // error={errorData}
              // onChange={handleChangePass}
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
            {/* {errorData && <div className="error">{errorData}</div>} */}
            <TextField
              value={dataUser.confirmPasword}
              name="confirmPasword"
              id="confirmPasword"
              // onChange={handleChangePass}
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
            <Button
              type="submit"
              onClick={handleFormSubmit}
              className="btn-register"
            >
              REGISTER
            </Button>
          </div>
          <Typography style={{ color: "#000" }}>
            Sudah Punya Akun ? <NavLink to="/login">Login</NavLink>
          </Typography>
        </div>
      </form>
    </div>
  );
}
