import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  phone: number,
  job: string,
  company: string,
  email: string,
  image: string,

) {
  return { name, phone, job, company, email, image };
}

const rows = [
  createData("Frozen ", 8111111111, "Arsitek","PT. ABC", "abc@amil.com", "Corn"),
  createData("Ice", 8111111111, "dokter","PT. DEF", "def@amil.com", "Corn"),
  createData("Eclair", 8111111111, "Koki", "PT. GHI", "ghi@amil.com", "Corn"),
  createData("Cupcake", 8111111111, "Arkeolog", "PT. ABC", "abc@amil.com", "Corn"),
  createData("Gingerbread", 8111111111, "Engineer", "PT. ABC", "abc@amil.com", "Corn"),
];

function TableContact () {
  const classes = useStyles();
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
//   const getDataContact = async (e: React.MouseEvent<HTMLElement>) => {
//        const data = {
//        name: dataContact?.name,
//          phone: dataContact?.phone,
//          job: dataContact?.job,
//          company: dataContact?.company,
//          email: dataContact?.email,
//          image: dataContact?.image,
//        };
//   const myHeaders = new Headers({
//     'Content-Type': 'application/json',
//     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwyMDAxNDAwMDRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyNjJlZTQwMjcxYzdkZDMyM2EzZWNmNDIwMjg3ZjRhYyIsImlhdCI6MTYwNjcyNzU3MywiZXhwIjoxNjA2ODEzOTczfQ.2jnEN_Uxf9mDnOciEm57T3vAcR2GAXEkuwnLHDpofVI'
// });
// return fetch('https://phone-book-api.herokuapp.com/api/v1/contacts', {
//   method: 'GET',
//   headers: myHeaders,
// })

// .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Something went wrong on api server!');
//     }
//   })
//   .then(response => {
//     console.debug(response);
//   }).catch(error => {
//     console.error(error);
//   });
// }

// getDataContact();
// }
useEffect(() => {
  getDataContact()
}, []);
  const getDataContact = async () => {
    const data = {
      name: dataContact?.name,
      phone: dataContact?.phone,
      job: dataContact?.job,
      company: dataContact?.company,
      email: dataContact?.email,
      image: dataContact?.image,
    };

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwyMDAxNDAwMDRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyNjJlZTQwMjcxYzdkZDMyM2EzZWNmNDIwMjg3ZjRhYyIsImlhdCI6MTYwNjcyNjg0NiwiZXhwIjoxNjA2ODEzMjQ2fQ.IMX8_G0beCWWdySB8ggNznR6y4xtEscPepIFQ5nqgLE",
        },
    };
    try {
      const response = await fetch(
        "https://phone-book-api.herokuapp.com/api/v1/contacts",
        requestOptions
      );
      const res = await response.json();
      setDataContact(res)
      console.log("============================", res);
      alert("Berhasil Mendaftar");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CONTACT</TableCell>
            <TableCell>COMPANY</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>FAV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.job}</TableCell>
              <TableCell>{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableContact;
