import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLogin from "./pages/userlogin.jsx";
import UserRegister from "./pages/userRegister.jsx";
import CaptainRegister from "./pages/captainRegister.jsx";
import CaptainLogin from "./pages/captainLogin.jsx";
import UserContext from "./context/userContext.jsx";
import Start from "./pages/start.jsx";
import Home from "./pages/home.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/userlogin",
    element: <UserLogin />,
  },
  {
    path: "/userregister",
    element: <UserRegister />,
  },
  {
    path: "/captainregister",
    element: <CaptainRegister />,
  },
  {
    path: "/captainlogin",
    element: <CaptainLogin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  </StrictMode>
);
