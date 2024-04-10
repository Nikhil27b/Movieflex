import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Nav></Nav>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AppLayout;
