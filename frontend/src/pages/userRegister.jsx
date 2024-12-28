import { useFormik } from "formik";
import style from "../css/userregister.module.css";
import { Link } from "react-router-dom";
import userRegisterSchema from "../schemas/userregisteryupschema";

function UserRegister(params) {
  let {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
    firstName:"",
    lastName:"",
      email: "",
      password: "",
    },
    validationSchema: userRegisterSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className={style.fullcontent}>
        <div className={style.formdiv}>
          <img
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png "
            className={style.img}
          />
          <form onSubmit={handleSubmit} action="">
            <div className={style.outerofname}>
              <div className={style.innername}>
                <label htmlFor="firstName" className={style.firstnamelabel}>
                  First Name
                </label>
                <label htmlFor="lastName" className={style.lastnamelabel}>
                  Last Name
                </label>
              </div>
              <div className={style.nameinputsdiv}>
                <input
                  type="text"
                  id="firstName"
                  className={style.inputfirstname}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                />
                

                <input
                  type="text"
                  id="lastName"
                  className={style.inputlastname}
                  onChange={handleChange}
                  name="lastName"
                  value={values.lastName}
                />
                
              </div>
              {errors.firstName && touched.firstName ? (
                  <p className={style.error}>{errors.firstName}</p>
                ) : null}
            </div>
            <div className={style.mainformdiv}>
              <label htmlFor="email" className={style.labelemail}>
                email
              </label>
              <input
                type="email"
                id="email"
                className={style.emailinput}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className={style.error}>{errors.email}</p>
              ) : null}
              <label htmlFor="password" className={style.labelpassword}>
                password
              </label>
              <input
                type="password"
                id="password"
                className={style.passwordinput}
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <p className={style.error}>{errors.password}</p>
              ) : null}
              <button className={style.submitbutton}>submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={style.linkdiv}>
        <Link className={style.linkbutton} to="/userlogin">
          login as user
        </Link>
      </div>
    </>
  );
}
export default UserRegister;
