import { TextField, Button, Typography, InputAdornment, Grid, IconButton } from "@material-ui/core";
import TableContact from "../../Component/TableContact"
import CardContact from "../../Component/CardContact"
import { Topbar } from "../../Component";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useEffect, useState } from "react";

 function Favorit() {
  interface MyData {
    name: string;
    phone: string;
    job: string;
    company: string;
    email: string;
    image: string;
  }
  const [dataContact, setDataContact] = useState<MyData>({
    name: "",
    phone: "",
    job: "",
    company: "",
    email: "",
    image: "",
  });
  console.log("dataContact", dataContact);

useEffect(() => {
  getDataContact()
}, []);
  const getDataContact = async () => {
    // const data = {
    //   name: dataContact?.name,
    //   phone: dataContact?.phone,
    //   job: dataContact?.job,
    //   company: dataContact?.company,
    //   email: dataContact?.email,
    //   image: dataContact?.image,
    // };

    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwyMDAxNDAwMDRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyNjJlZTQwMjcxYzdkZDMyM2EzZWNmNDIwMjg3ZjRhYyIsImlhdCI6MTYwNjcyNjg0NiwiZXhwIjoxNjA2ODEzMjQ2fQ.IMX8_G0beCWWdySB8ggNznR6y4xtEscPepIFQ5nqgLE",
    //     },
    // };
    // try {
    //   const response = await fetch(
    //     "https://phone-book-api.herokuapp.com/api/v1/contacts",
    //     requestOptions
    //   );
    //   const res = await response.json();
    //   setDataContact(res)
    //   console.log("============================", res);
    //   alert("Berhasil Mendaftar");
    // } catch (error) {
    //   alert(error);
    //   console.log(error);
    // }
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwyMDAxNDAwMDRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyNjJlZTQwMjcxYzdkZDMyM2EzZWNmNDIwMjg3ZjRhYyIsImlhdCI6MTYwNjcyNjg0NiwiZXhwIjoxNjA2ODEzMjQ2fQ.IMX8_G0beCWWdySB8ggNznR6y4xtEscPepIFQ5nqgLE");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://phone-book-api.herokuapp.com/api/v1/contacts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  };
    return (
        <div style={{ backgroundColor: "#EAE7E7" , height:"100vh"}}>
        <Topbar />
        <Grid container style={{ padding: "30px" }}>
        <Grid item xs={12} sm={12} spacing={3}>
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
export default Favorit