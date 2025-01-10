import style from "../css/riding.module.css";
import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { PiMoney } from "react-icons/pi";

function Ride(params) {
  return (
    <>
      <div className={style.outerdiv}>
        <div>
          <img
            src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
            alt=""
            className={style.homeimg}
          />
        </div>
        <div className={style.contentouterdiv}>
          <div className={style.contentprofilediv}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2122700972/display_1500/stock-photo-image-of-young-asian-woman-company-worker-in-glasses-smiling-and-holding-digital-tablet-standing-2122700972.jpg"
              className={style.personimg}
              alt=""
            />
            <div className={style.profilecontentdiv}>
                <h4 className="font-normal text-3xl">khushal</h4>
                <h2 className="font-bold text-3xl">ch222 sdfsfhs</h2>
                <p className="font-light text-2xl">suzuki mehran</p>
            </div>
          </div>
          <div>  <div className={style.confirmcontent}>
            <div className={style.locationlogo}>
              <TiLocation />
            </div>
            <div className={style.gap}>
              <h2>562/11-A</h2>
              <p>kankiara-talab-bhopal</p>
            </div>
          </div>
          <hr />

          <div className={style.confirmcontent}>
            <div className={style.locationlogo}>
              <PiMoney />
            </div>
            <div>
              <h2>Rs:120</h2>
              
            </div>
          </div>
          <hr /></div>
        </div>
        <div className="flex justify-center mt-3 ">
          <button className="bg-green-400 p-6 m-2 text-2xl w-full text-zinc-100 rounded-md ">make a payment</button>
        </div>
      </div>
    </>
  );
}
export default Ride