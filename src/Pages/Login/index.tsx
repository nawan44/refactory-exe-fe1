import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";

export default function Login() {
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
            style={{color:"#fff"}}
            className="textfield-password"
          />
          <Button className="btn-login">
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
