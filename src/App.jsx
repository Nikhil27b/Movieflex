import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const AppLayout = () => {
  return (
    <>
      <Nav></Nav>
      <main className="main">
        <Outlet></Outlet>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
    ],
    errorElement: <Error />,
  },
]);

export default appRoutes;