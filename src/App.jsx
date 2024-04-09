import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MovieDetails from "./pages/Moviedetails"

import Search from "./pages/Search";
import { createBrowserRouter, Outlet } from "react-router-dom";
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


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movie-review",
        element: <MovieDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default appRoutes;