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
import UserProtectedWrapper from "./pages/userWrapperProtected.jsx";
import UserLogout from "./pages/userLogout.jsx";
import CaptainContext from "./context/captainContext.jsx";
import CaptainProtectedWrapper from "./pages/captainWrapperProtected.jsx";
import CaptainHome from "./pages/captainHome.jsx";
import CaptainLogout from "./pages/captainLogout.jsx";
import Ride from "./pages/riding.jsx";

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
    element: <UserProtectedWrapper><Home /></UserProtectedWrapper>,
  },
  {
    path: "/ride",
    element:<Ride />,
  },
  {
    path: "/user/logout",
    element: <UserProtectedWrapper><UserLogout/></UserProtectedWrapper>,
  },
  {
    path: "/captainhome",
    element: <CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>,
  },
  {
    path: "/captain/logout",
    element: <CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
    </CaptainContext>
  </StrictMode>
);
