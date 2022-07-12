import React, { useState } from "react";
import LoginForm from "../../components/login/Login";
import ResetPassword from "../../components/login/ResetPassword";
import "./entry.css";

const EntryPage = () => {
  const [loadForm, setLoadForm] = useState("login");

  const frmSwitcher = (frmType) => {
    setLoadForm(frmType);
  };
  return (
    <div className="entry-page bg-info">
      {loadForm === "login" && <LoginForm frmSwitcher={frmSwitcher} />}
      {loadForm === "reset" && <ResetPassword frmSwitcher={frmSwitcher} />}
    </div>
  );
};

export default EntryPage;
