import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadCrum = ({ pages }) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

        <Breadcrumb.Item active>{pages}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrum;
