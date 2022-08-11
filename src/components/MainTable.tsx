import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Facility</TableCell>
              <TableCell>Building</TableCell>
              <TableCell align="right">Room</TableCell>
              <TableCell align="right">Urgency</TableCell>
              <TableCell align="right">Descriptions</TableCell>
              <TableCell align="right">creadtedBy</TableCell>
              <TableCell align="right">Acknowledgement</TableCell>
              <TableCell align="right">Resolved</TableCell>
              <TableCell align="right">Converted to Work Order</TableCell>
              <TableCell align="right">Creation Date</TableCell>
              <TableCell align="right">Resolved Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.building}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.facility}</TableCell>
                <TableCell align="right">{row.building}</TableCell>
                <TableCell align="right">{row.room}</TableCell>
                <TableCell align="right">{row.urgency}</TableCell>
                <TableCell align="right">{row.descriptions}</TableCell>
                <TableCell align="right">{row.creadtedBy}</TableCell>
                <TableCell align="center">
                  {row.acknowledgement ? "True" : "False"}
                </TableCell>
                <TableCell align="right">
                  {row.resolved ? "True" : "False"}
                </TableCell>
                <TableCell align="right">
                  {row.convertedToWo ? "True" : "False"}
                </TableCell>
                <TableCell align="right">{row.creationDate}</TableCell>
                <TableCell align="right">{row.resolutionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// facility?: string,
// building?: number,
// room?: number,
// urgency?: number,
// descriptions?: string,
// creadtedBy?: string,
// acknowledgement?: boolean,
// resolved?: boolean,
// convertedToWo?: boolean,
// creationDate?: string,
// resolutionDate?: string
