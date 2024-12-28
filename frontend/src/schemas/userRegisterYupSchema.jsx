import * as yup from "yup";

const userRegisterSchema = yup.object({
  
  firstName: yup.string().min(2).required("please enter your firstName"),
  email: yup.string().email().required("please enter your email"),
  password: yup.string().min(6).required("please enter your password"),
});
export default userRegisterSchema;
