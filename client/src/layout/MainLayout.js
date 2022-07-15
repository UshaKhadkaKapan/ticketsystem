import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>

      {/* main part */}
      <main className="main">{children}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
