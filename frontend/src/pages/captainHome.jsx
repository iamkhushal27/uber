import { useContext, useRef, useState } from "react";
import { UserDataContext } from "../context/userContext";
import style from "../css/captainHome.module.css";
import { CiTimer } from "react-icons/ci";
import { BiSolidNotepad } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
// import Ridepopup from "../components/ridepopup";
import UserDetails from "../components/userdetails";
import Ridepopup from "../components/ridepopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfrimRidePopup from "../components/confirmRidePopup";

function CaptainHome(params) {
  let [ridepopup, setRidepopup] = useState(false);
  let [confirmridepopup, setConfirmRidepopup] = useState(false);

  return (
    <>
      <div className="flex w-full h-full fixed flex-col">
        <div className={` ${style.mainimg} flex justify-end `}>
          <div className=" w-1/12 bg-gray-500 h-1/6 mt-8 ">
            <Link to="/captainlogin">
              <TbLogout2 className="w-full h-full" />
            </Link>
            <button
              onClick={() => {
                setRidepopup(true);
              }}
            >
              donesjkjsfdijijfijgij
            </button>
          </div>
        </div>

        {ridepopup ? (
          <Ridepopup setRidepopup={setRidepopup} setConfirmRidepopup={setConfirmRidepopup}></Ridepopup>
        ) : (
          <UserDetails></UserDetails>
        )}
        {confirmridepopup ? (
          <ConfrimRidePopup setRidepopup={setRidepopup} setConfirmRidepopup={setConfirmRidepopup} ></ConfrimRidePopup>
        ) : (
          null
        )}
      </div>
    </>
  );
}
export default CaptainHome;
