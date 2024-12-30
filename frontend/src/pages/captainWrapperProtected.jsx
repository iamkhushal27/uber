import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainProtectedWrapper({ children }) {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  if (!token) {
    useEffect(() => {
      navigate("/captainlogin");
    }, []);
  }
  console.log("here")

  return <>{children}</>;
}
export default CaptainProtectedWrapper;
