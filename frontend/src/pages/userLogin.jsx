import { useNavigate, Link } from "react-router-dom";
import style from "../css/userlogin.module.css";
import { useFormik } from "formik";
import signUpSchema from "../schemas/userLoginYupSchema";
import { useContext } from "react";
import { UserDataContext } from "../context/userContext";

function UserLogin(params) {
  let data=useContext(UserDataContext)
  console.log(data)
  let {values,handleBlur,handleChange,handleReset,handleSubmit,errors ,touched}=useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
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
              <Link to="/captainlogin">captain login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserLogin;
