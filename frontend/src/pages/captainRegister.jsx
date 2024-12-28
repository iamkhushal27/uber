import style from "../css/captainregister.module.css";
import { Link } from "react-router-dom";
import captainRegisterSchema from "../schemas/captainRegisterSchema.jsx";
import { useFormik } from "formik";
function CaptainRegister(params) {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: captainRegisterSchema,
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
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/986/425/small/captain-sailor-face-icon-illustration-vector.jpg "
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
                  value={values.lastName}
                  name="lastName"
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
        <Link className={style.linkbutton} to="/captainlogin">
          login as captain{" "}
        </Link>
      </div>
    </>
  );
}
export default CaptainRegister;
