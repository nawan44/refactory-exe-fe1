import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  Grid,
  Container,
  IconButton,
  ButtonBase,
} from "@material-ui/core";
import Topbar from "../../../Component/Layout/Topbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function AddContact() {
  return (
    <div style={{ backgroundColor: "#EAE7E7" , height:"100vh"}}>
      <Topbar />
      <Container>
        <Typography style={{ margin: "20px 0  20px" }}>ADD CONTACT</Typography>
        <Grid container>
          <Grid item xs={12} sm={9}>
            <Grid container style={{ padding: "5px 0" }}>
              <Grid item xs={12} sm={3}>
                <Typography className="form-label">NAME</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  margin="dense"
                  variant="outlined"
                  name="name"
                />
              </Grid>
            </Grid>
            <Grid container style={{ padding: "5px 0" }}>
              <Grid item xs={12} sm={3}>
                <Typography className="form-label">PHONE</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  margin="dense"
                  variant="outlined"
                  name="phone"
                />
              </Grid>
            </Grid>
            <Grid container style={{ padding: "5px 0" }}>
              <Grid item xs={12} sm={3}>
                <Typography className="form-label">EMAIL</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  margin="dense"
                  variant="outlined"
                  name="email"
                />
              </Grid>
            </Grid>
            <Grid container style={{ padding: "5px 0" }}>
              <Grid item xs={12} sm={3}>
                <Typography className="form-label">COMPANY</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  margin="dense"
                  variant="outlined"
                  name="company"
                />
              </Grid>
            </Grid>
            <Grid container style={{ padding: "5px 0" }}>
              <Grid item xs={12} sm={3}>
                <Typography className="form-label">JOB</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  margin="dense"
                  variant="outlined"
                  name="job"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            style={{
              width: "100%",
              margin: "0 auto",
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
          
            <Grid>
              <label>
              <AccountCircleIcon
                style={{
                  fontSize: "100px",
                  margin: "0 auto",
                  textAlign: "center",
                }}
                className="account-icon"
              />            
                     <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
                  <input style={{ display:"none"}} type="file"  />

              </label>

            </Grid>{" "}
          </Grid>
        </Grid>
      </Container>
      <Grid
        style={{ margin: "0 auto", textAlign: "center", marginTop: "30px" }}
      >
              <Button style={{width:"70%", margin :"0 auto", textAlign:"center"}} className="btn-register">SUBMIT</Button>

      </Grid>

    </div>
  );
}
export default AddContact;
