import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import EntryPage from "./pages/entry/EntryPage";
import AddNewTicket from "./pages/new-ticket/AddNewTicket";

const App = () => {
  return (
    <div>
      <MainLayout>
        <AddNewTicket />
        {/* <Dashboard /> */}
        {/* <EntryPage /> */}
      </MainLayout>
    </div>
  );
};

export default App;
