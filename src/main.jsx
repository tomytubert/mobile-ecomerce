import { render } from "preact";
import { App } from "./app.jsx";
import "./styles/restart.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);


ReactDOM.createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
