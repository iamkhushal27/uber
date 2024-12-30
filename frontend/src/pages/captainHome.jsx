import { useContext } from "react"
import { UserDataContext } from "../context/userContext"


function CaptainHome(params) {
    let {user,setUser}=useContext(UserDataContext)
    console.log(user)
    return<>CaptainHome</>
}
export default CaptainHome