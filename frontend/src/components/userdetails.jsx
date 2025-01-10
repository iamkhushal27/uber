import { CiTimer } from "react-icons/ci";
import { BiSolidNotepad } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function UserDetails(params) {
    return <>
    <div className="absolute top-2/4">
          <div className="flex justify-between   items-center mt-0.5">
            <div className="flex items-center">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-6/6 rounded-full w-4/12"
                alt=""
              />
              <p className="font-bold text-3xl">khushal</p>
            </div>
            <div className="flex flex-col text-start mr-0.5">
              <h2 className="font-bold text-3xl">RS250</h2>
              <p className="font-400 text-1xl">earned</p>
            </div>
          </div>
          <div className="flex justify-center text-center mt-7 ">
            <div className="bg-gray-400 flex gap-12  ">
              <div className="flex justify-center items-center flex-col">
                <CiTimer className="font-bold text-3xl" />
                <p className="font-bold text-2xl">10.2</p>
                <p className="font-normal text-base">hours online</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <CiTimer className="font-bold text-3xl" />
                <p className="font-bold text-2xl">10.2</p>
                <p className="font-normal text-base">hours online</p>
              </div>
              <div className="flex justify-center items-center flex-col py-6 rounded-lg">
                <BiSolidNotepad className="font-bold text-3xl" />
                <p className="font-bold text-2xl">10.2</p>
                <p className="font-normal text-base">hours online</p>
              </div>
            </div>
          </div>
        </div>
    </>
}
export default UserDetails