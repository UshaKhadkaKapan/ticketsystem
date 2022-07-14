import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      {/* main part */}

      <Footer />
    </div>
  );
};

export default MainLayout;
