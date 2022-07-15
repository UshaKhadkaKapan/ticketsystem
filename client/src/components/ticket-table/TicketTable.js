import React from "react";
import { Table } from "react-bootstrap";

const TicketTable = () => {
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
        <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>client response pending</td>
          <td>2022 10 5</td>
        </tr>
        <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>client response pending</td>
          <td>2022 10 5</td>
        </tr>
        <tr>
          <td>1</td>
          <td>ssl issue</td>
          <td>client response pending</td>
          <td>2022 10 5</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TicketTable;
