import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CustomTable(props) {
  return (
    <TableContainer component={Paper}>
      <h2>{props.makes.length}</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">MAKE</TableCell>
            <TableCell align="right">VehicleType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, idx) => (
            <TableRow
              key={row.MakesId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="right">{row.MakeName}</TableCell>
              <TableCell align="right">{row.VehicleTypeName}</TableCell>
              <TableCell align="right">
                <DeleteIcon
                  // add onClick method here
                  onClick={() => {
                    console.log(props.deleteMake);
                    props.deleteMake(idx);
                  }}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
