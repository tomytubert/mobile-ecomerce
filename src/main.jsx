import { App } from "./app.jsx";
import "./styles/restart.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExpiringDataProvider } from "./context/dataContext.jsx";

import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <ExpiringDataProvider>
    <RouterProvider router={router} />
  </ExpiringDataProvider>
);
