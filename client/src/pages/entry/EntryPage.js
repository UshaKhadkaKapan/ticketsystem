import React from "react";
import LoginForm from "../../components/login/Login";
import ResetPassword from "../../components/login/ResetPassword";
import "./entry.css";

const EntryPage = () => {
  return (
    <div className="entry-page bg-info">
      <LoginForm />
      <ResetPassword />
    </div>
  );
};

export default EntryPage;
