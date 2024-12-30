import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProtectedWrapper({ children }) {
    const token=localStorage.getItem("token")
    let navigate=useNavigate()
    console.log(token)
    useEffect(()=>{
        if (!token) {
            navigate("/userlogin")
        }
    },[])

  return <>{children}</>;
}

export default UserProtectedWrapper
