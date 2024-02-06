import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  return (
    <div className={darkTheme ? "main dark" : "main light"}>
      <Header darkTheme={setDarkTheme} theme={darkTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
