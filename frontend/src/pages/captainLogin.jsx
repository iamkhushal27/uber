import { useNavigate, Link } from "react-router-dom";
import style from "../css/captainlogin.module.css";
import { useFormik } from "formik";
import signUpSchema from "../schemas/userLoginYupSchema";
import captainSignUpSchema from "../schemas/captainLoginYupSchema";
import { useContext } from "react";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

function CaptainLogin(params) {

  let {data,setData}=useContext(CaptainDataContext)
  let navigate=useNavigate()
  let {values,handleBlur,handleChange,handleReset,handleSubmit,errors ,touched}=useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:captainSignUpSchema,
    onSubmit: async(values,action) => {
      
      console.log(values);
      let response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/captain/login`,
        values,
        {withCredentials:true}
      );

      if (response.status == 200) {
        let data = response.data;
        localStorage.setItem("token", data.accessToken);
        setData(data.captain);
        console.log(data.captain)
        navigate("/captainhome");
      }
      action.resetForm()
     
    },
  });
  console.log(errors)
  return (
    <>
      <div className={style.maindiv}>
        <div className={style.fullcontent}>
          <img
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png "
            className={style.img}
          />
          <h2 className={style.captainheading}>Captain</h2>
          <div className={style.formdiv}>
            <form onSubmit={handleSubmit} action="">
              <div>
               
                <label htmlFor="email" className={style.emaillabel}>
                  Enter your email
                </label>
              </div>
              <input
              onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className={style.inputemail}
                value={values.email}
                placeholder="enter your email"
              />
              {errors.email&&touched.email?<p className={style.error}>{errors.email}</p>:null}
              <div>
                <label htmlFor="password" className={style.passwordlabel}>
                  Enter your password
                </label>
              </div>
              <input
              onChange={handleChange}
                type="password"
                id="password"
                name="password"
                className={style.inputpassword}
                value={values.password}
                placeholder="enter your password"
              />
               {errors.password&&touched.password?<p className={style.error}>{errors.password}</p>:null}
              <div>
                <button  className={style.formbutton}>login</button>
              </div>
            </form>
          </div>
          <div className={style.linkdiv}>
            <button className={style.linkbutton}>
              <Link to="/userregister">user register</Link>
            </button>
          </div>
          <div className={style.linkdiv}>
            <button className={style.linkbutton}>
              <Link to="/captainregister">captain register</Link>
            </button>
          </div>
          <div className={style.linkdiv}>
            <button className={style.linkbutton}>
              <Link to="/userlogin">user login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CaptainLogin;
