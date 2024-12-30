import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

function CaptainLogout(params) {
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/captain/logout`, {
        withCredentials: true,
      })
      .then((data) => {
        localStorage.removeItem("token");
        console.log(data);
        useEffect(() => {
          navigate("/captainlogin");
        }, []);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <>captain logout</>;
}
export default CaptainLogout;
