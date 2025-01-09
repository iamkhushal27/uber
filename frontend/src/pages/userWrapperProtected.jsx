import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

function UserProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if no token
    if (!token) {
      navigate("/userlogin");
      return;
    }

    // Fetch user profile
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/users/myprofile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Space after "Bearer"
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setUser(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem('token')
        navigate("/userlogin");
      });
  }, [token, navigate, setUser]); // Dependencies: Ensure it runs only when these change

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while fetching
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
