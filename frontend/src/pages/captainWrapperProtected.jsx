import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let { data, setData } = useContext(CaptainDataContext);
  let [loading,setLoading]=useState(true)


  useEffect(() => {
    if (!token) {
      navigate("/captainlogin");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/captain//myprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status == 200) {
          setData(data.data)
          setLoading(false)

          
        }
      }).catch((err)=>{
        console.log(err)
        localStorage.removeItem("token")
        navigate("/captainlogin")
        
      });
  }, [token,navigate,setData]);

  if (loading) {
    <div>loading...</div>
  }

  return <>{children}</>;
}
export default CaptainProtectedWrapper;
