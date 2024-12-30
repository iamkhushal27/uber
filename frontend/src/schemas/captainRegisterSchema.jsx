import * as yup from "yup";

const captainRegisterSchema = yup.object({
  
  firstName: yup.string().min(2).required("please enter your firstName"),
  color: yup.string().min(2).required("enter color"),
  plate: yup.string().min(2).required("enter plate number "),
  capacity: yup.number().required("please enter capacity"),
  vehicleType: yup.string().min(2).required("please enter your firstName"),
  email: yup.string().email().required("please enter your email"),
  password: yup.string().min(6).required("please enter your password"),
});
export default captainRegisterSchema;