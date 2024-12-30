import style from "../css/captainregister.module.css";
import { Link, useNavigate } from "react-router-dom";
import captainRegisterSchema from "../schemas/captainRegisterSchema.jsx";
import { useFormik } from "formik";
import { useContext } from "react";
import { CaptainDataContext } from "../context/captainContext.jsx";
import axios from "axios";
function CaptainRegister(params) {
  const { data, setData } = useContext(CaptainDataContext);
  let navigate = useNavigate();
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
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: "",
    },
    validationSchema: captainRegisterSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      let setNewUser = {
        fullName: {
          firstName: values.firstName,
          lastName: values.lastName,
        },
        email: values.email,
        password: values.password,
        vehicle: {
          plate: values.plate,
          color: values.color,
          capacity: values.capacity,
          vehicleType: values.vehicleType,
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/captain/`,
        setNewUser
      );
      if (response.status == 200) {
        let data = response.data;
        console.log(data);
        navigate("/captainlogin");
        setData(data)
      }
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

              <div className={style.innername}>
                <label htmlFor="vehiclecolor" className={style.firstnamelabel}>
                  vehicle color
                </label>
                <label htmlFor="vehicleplate" className={style.lastnamelabel}>
                  vehicle plate
                </label>
              </div>
              <div className={style.nameinputsdiv}>
                <input
                  type="text"
                  id="vehiclecolor"
                  className={style.inputfirstname}
                  onChange={handleChange}
                  value={values.color}
                  name="color"
                />
                <input
                  type="text"
                  id="vehicleplate"
                  className={style.inputlastname}
                  onChange={handleChange}
                  value={values.plate}
                  name="plate"
                />
              </div>
              <div className={style.innername}>
                <label htmlFor="capacity" className={style.firstnamelabel}>
                  capacity
                </label>
                <label htmlFor="vehicleType" className={style.lastnamelabel}>
                  select vehicle
                </label>
              </div>
              <div className={style.nameinputsdiv}>
                <input
                  type="number"
                  id="capacity"
                  className={style.inputfirstname}
                  onChange={handleChange}
                  value={values.capacity}
                  name="capacity"
                />
                <select
                  name="vehicleType"
                  id="vehicleType"
                  onChange={handleChange}
                  className={style.inputfirstname}
                  value={values.vehicleType}
                >
                  <option value="">select vehicle type</option>
                  <option value="car">car</option>
                  <option value="auto">auto</option>
                  <option value="moto">moto</option>
                </select>
              </div>
              {(errors.password && touched.password) ||
              (errors.email && touched.email) ||
              (errors.firstName && errors.firstName) ? (
                <p className={style.error}>
                  all fields are require except lastName
                </p>
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
