import { CiTimer } from "react-icons/ci";
import { BiSolidNotepad } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { PiMoney } from "react-icons/pi";

function Ridepopup({ setRidepopup,setConfirmRidepopup }) {
  console.log("done")
  return (
    <>
      {" "}
      <div className=" bg-slate-50 h-full w-full absolute top-1/4">
        <div className="flex    justify-center mt-0.5">
          <div className="flex font-bold text-2xl items-center">
            <FaCaretDown
              onClick={() => {
                setRidepopup(false);
              }}
            />
          </div>
        </div>
        <div className=" font-bold text-2xl mt-4 ml-3">
          <h2>New Ride Available</h2>
        </div>
        <div className="bg-yellow-400 ml-3 mr-3 mt-6 rounded-md flex items-center justify-between p-2">
          <div className="flex items-center ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s"
              className="h-4/5 m-2 rounded-full w-4/12"
              alt=""
            />
            <h4 className="font-bold text-1xl">khushal</h4>
          </div>
          <div className="font-bold text-1xl ">
            <p>2.2km</p>
          </div>
        </div>
        <div className="flex items-center m-2 ">
          <RiUserLocationFill className="font-bold text-2xl"></RiUserLocationFill>{" "}
          <div className="flex flex-col ml-3 ">
            <h3 className="font-bold text-xl m-0 p-0">562/-A</h3>
            <p className="text-lg  m-0 p-0">kankaria-talab,bhopal</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center m-2 ">
          <TiLocation className="font-bold text-2xl"></TiLocation>{" "}
          <div className="flex flex-col ml-3 ">
            <h3 className="font-bold text-xl m-0 p-0">562/-A</h3>
            <p className="text-lg  m-0 p-0">kankaria-talab,bhopal</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center m-2 ">
          <PiMoney className="font-bold text-2xl"></PiMoney>{" "}
          <div className="flex flex-col ml-3 ">
            <h3 className="font-bold text-xl m-0 p-0">562/-A</h3>
            <p className="text-lg  m-0 p-0">kankaria-talab,bhopal</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button onClick={()=>{
            setRidepopup(false)
            setConfirmRidepopup(true)
          }} className="w-11/12 bg-green-400 text-white py-2 rounded-lg">
            Accept
          </button>

          <button
            onClick={() => {
              setRidepopup(false);
            }}
            className="w-11/12 bg-slate-500 py-2 text-white rounded-lg"
          >
            Ignore
          </button>
        </div>
      </div>
    </>
  );
}

export default Ridepopup;
