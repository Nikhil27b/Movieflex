import "./App.css";
import { Home, Search, MovieDetails, Error, Genre } from "./Pages";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout";

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
      {
        path: "/movie-category",
        element: <Genre />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default appRoutes;
