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
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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

  useEffect(function effectFunction() {
    fetch('https://phone-book-api.herokuapp.com/api/v1/contacts', {   method: "GET",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'email': 'l200140004@gmail.com',
      'password': 'l200140004'
    }})
        .then(response => response.json())
        .then(({ data: dataContact }) => {
          setDataContact(dataContact);
        });
}, []);
  // const getDataContact = async (e: React.MouseEvent<HTMLElement>) => {
  //   const data = {
  //     name: dataContact?.name,
  //     phone: dataContact?.phone,
  //     job: dataContact?.job,
  //     company: dataContact?.company,
  //     email: dataContact?.email,
  //     image: dataContact?.image,
  //   };

  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwyMDAxNDAwMDRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyNjJlZTQwMjcxYzdkZDMyM2EzZWNmNDIwMjg3ZjRhYyIsImlhdCI6MTYwNjcyNjg0NiwiZXhwIjoxNjA2ODEzMjQ2fQ.IMX8_G0beCWWdySB8ggNznR6y4xtEscPepIFQ5nqgLE",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   try {
  //     const response = await fetch(
  //       "https://phone-book-api.herokuapp.com/api/v1/contacts",
  //       requestOptions
  //     );
  //     const res = await response.json();
  //     console.log(res.data);
  //     alert("Berhasil Mendaftar");
  //   } catch (error) {
  //     alert(error);
  //     console.log(error);
  //   }
  // };

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
              {/* <TableCell>{row.phone}</TableCell>
              <TableCell>{row.job}</TableCell>
              <TableCell>{row.company}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableContact;
