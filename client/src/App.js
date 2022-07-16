import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import EntryPage from "./pages/entry/EntryPage";
import AddNewTicket from "./pages/new-ticket/AddNewTicket";
import TicketList from "./pages/ticketList/TicketList";

const App = () => {
  return (
    <div>
      <MainLayout>
        <TicketList />
        {/* <AddNewTicket /> */}
        {/* <Dashboard /> */}
        {/* <EntryPage /> */}
      </MainLayout>
    </div>
  );
};

export default App;
