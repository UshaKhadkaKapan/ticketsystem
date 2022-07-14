import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import EntryPage from "./pages/entry/EntryPage";

const App = () => {
  return (
    <div>
      <MainLayout>
        <Dashboard />
        {/* <EntryPage /> */}
      </MainLayout>
    </div>
  );
};

export default App;
