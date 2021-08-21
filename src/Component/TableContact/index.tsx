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
  createData("Rachmat ", 8111111111, "Arsitek","PT. ABC", "abc@amil.com", "Corn"),
  createData("Gunawan", 81298673456, "dokter","PT. DEF", "def@amil.com", "Corn"),
  createData("Saputra", 85612108917, "Koki", "PT. GHI", "ghi@amil.com", "Corn"),
  createData("Umar", 813627892902, "Arkeolog", "PT. ABC", "abc@amil.com", "Corn"),
  createData("Abdurrahman", 818191816273, "Engineer", "PT. ABC", "abc@amil.com", "Corn"),
  createData("Ahmad", 8322981198, "Tukang", "PT. EDC", "edc@amil.com", "Corn"),
  createData("Abu", 81981827364, "Office Boy", "PT. ABC", "abc@amil.com", "Corn"), 
  createData("Uwais", 819282816273, "Penulis", "PT. JKL", "jkl@amil.com", "Corn"),
  createData("Korn", 8322916273, "Driver", "PT. GHI", "ghi@amil.com", "Corn"),
  createData("Chen", 8198172664, "Cleaning Services", "PT. YHJ", "yhj@amil.com", "Corn"),
];

function TableContact () {
  const classes = useStyles();
  const [open, setOpen] = useState({});
  // const { dialogAksi } = open;

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
              <Table className={classes.table} stickyHeader aria-label="sticky table">

        <TableHead>
          <TableRow>
            <TableCell className="headerTitle">NAMA</TableCell>
            <TableCell className="headerTitle">PHONE</TableCell>
            <TableCell className="headerTitle">JOB</TableCell>
            <TableCell className="headerTitle">COMPANY</TableCell>
            <TableCell className="headerTitle">EMAIL</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}   
            // onClick={() => {
            //    console.log("---------???", item);
            //   setOpen(
            //   );
            // }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.job}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.email}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableContact;
