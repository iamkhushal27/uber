import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";



function UserLogout(params) {

let navigate=useNavigate()

let token=localStorage.getItem("token")
console.log(token)

if (token) {
    console.log()
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/logout`,{withCredentials:true}).then((data)=>{
        localStorage.removeItem("token")
        console.log(data)
        navigate('/userlogin')

    }).catch((err)=>{console.log(err)})
}

 return<>logout</>   
}
export default UserLogout