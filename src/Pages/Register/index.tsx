import { TextField, Button, Typography, InputAdornment } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Register() {
    const history = useHistory();
    // const [state, setstate] = useState<string>({
    //     name: null,
    //     email:null,
    //     password:null,
    //     confirmPasword:null,
    //   });
    
    const handleSubmit = async (data: React.FormEvent<HTMLInputElement>) => {
    //     // let form = { ...state, testTapping: selectBank() };
     data.preventDefault();
    history.push("/login");
    
         try {
           let form = { ...state };
           // console.log("form", form);
          const response = await fetch(
           "https://phone-book-api.herokuapp.com/api/v1/signup",
            {
              method: "POST",
          
              body: JSON.stringify(form),
            }
          );
          const res = await response.json();
          const {name, value}: any = e.target;
          const {email, value}: any = e.target;
          const {password, value}: any = e.target;
          const {confirmPasword, value}: any = e.target;

          // console.log("res>>", res);
          setstate({
            [name]: "",
            [email]: "",
            [password]: "",
            [confirmPasword]: ""
           
          });
        //   alert("success", res.status);
        } catch (err) {
         //   alert("error", err.message);
         }
     };
    
    return (
        <div className="container-login" >

            <div className="container-login-left" >
                <div className="logo-contact">
                </div>
            </div>

            <div className="container-login-right" >
                <div className="box-login">
                    <Typography className="typography">REGISTER</Typography>
                    <TextField InputProps={{ className:"textfield",
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Name" variant="outlined" className="textfield-name" />
                    <TextField InputProps={{ className:"textfield",
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Email" variant="outlined" className="textfield-name" />
                    <TextField InputProps={{
                         className:"textfield",
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Password" variant="outlined" className="textfield-name" />
                    <Button className="btn-register">REGISTER</Button>
                </div>
            </div>
        </div>
    );
}