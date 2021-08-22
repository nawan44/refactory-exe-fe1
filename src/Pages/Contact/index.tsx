import { TextField, Button, Grid, IconButton } from "@material-ui/core";
import TableContact from "../../Component/TableContact";
import CardContact from "../../Component/CardContact";
import { Topbar } from "../../Component";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
function Contact() {
  return (
    <div style={{ backgroundColor: "#EAE7E7" , height:"100vh"}}>
      <Topbar />
      <Grid container style={{ padding: "30px" }}>
      <Grid item xs={12} sm={12} spacing={3}  style={{ textAlign:"left"}} >
      <IconButton><AddCircleIcon style={{color:"#000", fontSize:"30px"}}/><Link to="/add-contact" style={{margin:"0 10px", color:"#000", textDecoration:"none"}} > Add Contact </Link></IconButton>
          </Grid>
        <Grid item xs={12} sm={9} style={{padding:"20px"}}>
          <TableContact />
        </Grid>
        <Grid item xs={12} sm={3}  style={{padding:"20px 10px"}}>
          {" "}
          <CardContact />
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;
