import * as yup from "yup";

 const signUpSchema=yup.object({
    email:yup.string().email().required("please enter your email"),
    password:yup.string().min(6).required("please enter your password"),
    
})
export default signUpSchema