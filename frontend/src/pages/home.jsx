import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


function Home(params) {
  return (
    <>
  
      <div className="  bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Modern_British_LED_Traffic_Light.jpg/640px-Modern_British_LED_Traffic_Light.jpg)] bg-cover h-screen w-full flex-col flex justify-between  bg-red-400">
        <img
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png "
          className="h-30 w-32 py-10 px-6"
          alt=""
        />
        <div className=" bg-slate-100   h-40">
            
          <h1 className="  mx-16 my-4 text-2xl">get started with uber</h1>
          <Link
            className=" bg-black text-white  rounded h-11   flex items-center justify-center mx-6 my-5 "
            to="/login"
          >
            continue
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
