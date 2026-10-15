import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header title="My Portfolio" />
      <main>
        <Outlet />
      </main>
      <Footer owner="Aben Dilnaz" year={2026} />
    </>
  );
}

export default Layout;