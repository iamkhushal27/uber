import { useContext } from "react"
import { UserDataContext } from "../context/userContext"


function Home(params) {
    let {user,setUser}=useContext(UserDataContext)
    console.log(user)
    return<>home</>
}
export default Home