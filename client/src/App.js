import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import EntryPage from "./pages/entry/EntryPage";

const App = () => {
  return (
    <div>
      <MainLayout />
      <EntryPage />
    </div>
  );
};

export default App;
