import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./MainTable.module.css";

const createData = (
  facility?: string,
  building?: number,
  room?: number,
  urgency?: number,
  descriptions?: string,
  creadtedBy?: string,
  acknowledgement?: boolean,
  resolved?: boolean,
  convertedToWo?: boolean,
  creationDate?: string,
  resolutionDate?: string
) => {
  return {
    facility,
    building,
    room,
    urgency,
    descriptions,
    creadtedBy,
    acknowledgement,
    resolved,
    convertedToWo,
    creationDate,
    resolutionDate,
  };
};
const rows = [
  createData(
    "test",
    3,
    5,
    5,
    "description",
    "wednesday",
    true,
    false,
    true,
    "monday",
    "Friday"
  ),
  createData(
    "test",
    3,
    5,
    5,
    "description",
    "wednesday",
    true,
    false,
    true,
    "monday",
    "Friday"
  ),
  createData(
    "test",
    3,
    5,
    5,
    "description",
    "wednesday",
    true,
    false,
    true,
    "monday",
    "Friday"
  ),
];

export const MainTable: FC = () => {
  return (
    <div className={styles["container"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Facility</TableCell>
              <TableCell>Building</TableCell>
              <TableCell align="center">Room</TableCell>
              <TableCell align="center">Urgency</TableCell>
              <TableCell align="center">Descriptions</TableCell>
              <TableCell align="center">creadtedBy</TableCell>
              <TableCell align="center">Acknowledgement</TableCell>
              <TableCell align="center">Resolved</TableCell>
              <TableCell align="center">Converted to Work Order</TableCell>
              <TableCell align="center">Creation Date</TableCell>
              <TableCell align="center">Resolved Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.building}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.facility}</TableCell>
                <TableCell align="center">{row.building}</TableCell>
                <TableCell align="center">{row.room}</TableCell>
                <TableCell align="center">{row.urgency}</TableCell>
                <TableCell align="center">{row.descriptions}</TableCell>
                <TableCell align="center">{row.creadtedBy}</TableCell>
                <TableCell align="center">
                  {row.acknowledgement ? "True" : "False"}
                </TableCell>
                <TableCell align="center">
                  {row.resolved ? "True" : "False"}
                </TableCell>
                <TableCell align="center">
                  {row.convertedToWo ? "True" : "False"}
                </TableCell>
                <TableCell align="center">{row.creationDate}</TableCell>
                <TableCell align="center">{row.resolutionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
