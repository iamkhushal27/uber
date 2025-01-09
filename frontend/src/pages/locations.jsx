import { IoLocationSharp } from "react-icons/io5";
import style from "../css/locations.module.css";

function Locations({setCar}) {
  return (
    <>
      <div className={style.outerdiv} onClick={()=>{
        setCar(true)
      }}>
        <div className={style.locationdiv}>
          <IoLocationSharp  className={style.location}/>
        </div>
        <div className={style.contentouterdiv}>
          <h2 className={style.contentheading}>charsada Road</h2>
          <p>charsada road hajiabads</p>
        </div>
      </div>
      <div className={style.outerdiv}>
        <div className={style.locationdiv}>
          <IoLocationSharp  className={style.location}/>
        </div>
        <div className={style.contentouterdiv}>
          <h2 className={style.contentheading}>charsada Road</h2>
          <p>charsada road hajiabads</p>
        </div>
      </div>
      <div className={style.outerdiv}>
        <div className={style.locationdiv}>
          <IoLocationSharp  className={style.location}/>
        </div>
        <div className={style.contentouterdiv}>
          <h2 className={style.contentheading}>charsada Road</h2>
          <p>charsada road hajiabads</p>
        </div>
      </div>
    </>
  );
}
export default Locations
