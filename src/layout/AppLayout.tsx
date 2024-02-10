import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
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
