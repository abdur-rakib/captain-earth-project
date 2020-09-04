import React from "react";
import { useState } from "react";
import ReportPage from "./ReportPage";
import LoginForm from "./LoginForm";
import "./Admin.css";

const Admin = () => {
  const [admin, setAdmin] = useState(false);
  const renderAdmin = admin ? (
    <ReportPage />
  ) : (
    <LoginForm setAdmin={setAdmin} />
  );
  return <div className="admin">{renderAdmin}</div>;
};

export default Admin;
