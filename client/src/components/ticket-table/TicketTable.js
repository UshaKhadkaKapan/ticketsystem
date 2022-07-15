import React from "react";
import { Table } from "react-bootstrap";

const TicketTable = ({ ticket }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
        {ticket.length &&
          ticket.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.Subject}</td>
              <td>{row.status}</td>
              <td>{row.createdDate}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TicketTable;
