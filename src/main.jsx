import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes} />
);