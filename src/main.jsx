import { App } from "./app.jsx";
import "./styles/restart.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";

import ItemPage from "./views/ItemPage/ItemPage.jsx";
import * as ReactDOM from "react-dom/client";
import RootContext from "./context/rootContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: "/:productId",
    element: (
      <>
        <Header />
        <ItemPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <RootContext>
    <RouterProvider router={router} />
  </RootContext>
);
