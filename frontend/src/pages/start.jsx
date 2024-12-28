import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import style from "../css/start.module.css";

function Start(params) {
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.homeimg}>
          <img
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png "
            className={style.img}
          />
          
        </div>
        <div className={style.content}>
            <h1 className={style.contentheading}>get started with uber</h1>
            <Link to="/userlogin"
              className={style.link}
            >
              continue
            </Link>
          </div>
      </div>
    </>
  );
}
export default Start;
