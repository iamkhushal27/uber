import { useContext, useRef, useState } from "react";
import { UserDataContext } from "../context/userContext";
import style from "../css/home.module.css";
import { useFormik } from "formik";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowDown } from "react-icons/fa6";
import Locations from "./locations";
import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { PiMoney } from "react-icons/pi";

function Home(params) {
  let { user, setUser } = useContext(UserDataContext);
  let panelRef = useRef(null);
  let background = useRef(null);
  let carPanel = useRef(null);
  let ridePanel = useRef(null);
  let rideLookingPanel = useRef(null);
  let waitingforDriverref = useRef(null);
  let [arrow, setArrow] = useState(false);
  //   let [arrow,setArrow]=useState()
  let [panel, setPanel] = useState(false);
  let [car, setCar] = useState(false);
  let [ride, setRide] = useState(false);
  let [lookingRide,setLookingRide]=useState(false)
  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: "70vh",
      });
      gsap.to(background.current, {
        backgroundColor: "white",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0vh",
      });
    }
  }, [panel]);
  useGSAP(() => {
    if (car) {
      gsap.to(carPanel.current, {
        height: "50vh",
      });
      gsap.to(background.current, {
        display: "none",
      });
      gsap.to(panelRef.current, {
        height: "0vh",
      });
    } else {
      gsap.to(carPanel.current, {
        height: "0vh",
      });
      gsap.to(background.current, {
        display: "block",
      });
    }
  }, [car]);

  useGSAP(() => {
    if (ride) {
      gsap.to(ridePanel.current, {
        height: "70vh",
      });
      gsap.to(background.current, {
        display: "none",
      });
    } else {
      gsap.to(ridePanel.current, {
        height: "0vh",
      });
      gsap.to(background.current, {
        display: "block",
      });
    }
  }, [ride]);
  useGSAP(() => {
    if (lookingRide) {
      gsap.to(rideLookingPanel.current, {
        height: "70vh",
      });
      gsap.to(background.current, {
        display: "none",
      });
    } else {
      gsap.to(rideLookingPanel.current, {
        height: "0vh",
      });
      gsap.to(background.current, {
        display: "block",
      });
    }
  }, [lookingRide]);

  let { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      location: "",
      destination: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  console.log(user);
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        className={style.logoimg}
        alt=""
      />
      <div>
        <img
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
          className={style.map}
        />
      </div>
      <div className={style.inputdiv}>
        <div ref={background}>
          <div className={style.background}>
            <h1 className={style.tripheading}>Find a trip</h1>
            {arrow ? (
              <FaArrowDown
                className={style.arrow}
                onClick={() => {
                  setPanel(false);
                  setArrow(false);
                }}
              />
            ) : null}
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className={style.pickupdiv}>
              <input
                type="text"
                className={style.pickup}
                placeholder="Add a pick-up location"
                onChange={handleChange}
                value={values.location}
                name="location"
                onClick={() => {
                  console.log("here");
                  setPanel(true);
                  setArrow(true);
                }}
              />
            </div>
            <div>
              <div className={style.pickupdiv}>
                <input
                  type="text"
                  className={style.pickup}
                  placeholder="Enter your destination"
                  onChange={handleChange}
                  value={values.destination}
                  name="destination"
                  onClick={() => {
                    setPanel(true);
                    setArrow(true);
                  }}
                />
              </div>
            </div>
          </form>
        </div>

        <div ref={panelRef} className={style.panel}>
          <Locations car={car} setCar={setCar}></Locations>
        </div>
        <div ref={carPanel} className={style.carpick}>
          <div
            onClick={() => {
              setCar(false);
              setArrow(false);
              setPanel(false);
            }}
            className={style.cancelicon}
          >
            <MdCancel />
          </div>
          <div
            className={style.pickcarouterdiv}
            onClick={() => {
              setCar(false);
              setArrow(false);
              setPanel(false);
              setRide(true);
            }}
          >
            <img
              src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
              className={style.carimg}
              alt=""
            />
            <div className={style.outerdivcontent}>
              <div className={style.carcontent}>
                <div className={style.insidecarcontent}>
                  <h2 className={style.uberheading}>UberGo</h2>
                  <FaPerson className={style.personlogo} />
                  <p>4</p>
                </div>
                <div>
                  <p className={style.rate}>RS 100</p>
                </div>
              </div>
              <p className={style.paracontent}>2 mins away.1524</p>
              <p>afordiable,compact rides</p>
            </div>
          </div>
          <div className={style.pickcarouterdiv}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
              className={style.carimg}
              alt=""
            />
            <div className={style.outerdivcontent}>
              <div className={style.carcontent}>
                <div className={style.insidecarcontent}>
                  <h2 className={style.uberheading}>UberGo</h2>
                  <FaPerson className={style.personlogo} />
                  <p>4</p>
                </div>
                <div>
                  <p className={style.rate}>RS 100</p>
                </div>
              </div>
              <p className={style.paracontent}>2 mins away.1524</p>
              <p>afordiable,compact rides</p>
            </div>
          </div>
          <div className={style.pickcarouterdiv}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              className={style.carimg}
              alt=""
            />
            <div className={style.outerdivcontent}>
              <div className={style.carcontent}>
                <div className={style.insidecarcontent}>
                  <h2 className={style.uberheading}>UberGo</h2>
                  <FaPerson className={style.personlogo} />
                  <p>4</p>
                </div>
                <div>
                  <p className={style.rate}>RS 100</p>
                </div>
              </div>
              <p className={style.paracontent}>2 mins away.1524</p>
              <p>afordiable,compact rides</p>
            </div>
          </div>
        </div>
        <div className={style.confirmride} ref={ridePanel}>
          <div className={style.confirmcancel}>
            <MdCancel
              onClick={() => {
                setRide(false);
              }}
            />
          </div>
          <div className={style.confirmheading}>Confrim your Ride</div>
          <div>
            <img
              src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
              className={style.confirmimg}
              alt=""
            />
          </div>
          <div className={style.confirmcontent}>
            <div className={style.locationlogo}>
              <RiUserLocationFill />
            </div>
            <div className={style.gap}>
              <h2>562/11-A</h2>
              <p>kankiara-talab-bhopal</p>
            </div>
          </div>
          <hr />

          <div className={style.confirmcontent}>
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
          <hr />
          <div className={style.confirmbuttondiv}>
            <button className={style.confirmbutton} onClick={()=>{
                setRide(false)
                setLookingRide(true)
            }}>confirm</button>
          </div>
        </div>
        <div className={style.confirmride} ref={rideLookingPanel}>
          <div className={style.confirmcancel}>
            <MdCancel
              onClick={() => {
                setLookingRide(false)
              }}
            />
          </div>
          <div className={style.confirmheading}>Looking for a Driver</div>
          <div>
            <img
              src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
              className={style.confirmimg}
              alt=""
            />
          </div>
          <div className={style.confirmcontent}>
            <div className={style.locationlogo}>
              <RiUserLocationFill />
            </div>
            <div className={style.gap}>
              <h2>562/11-A</h2>
              <p>kankiara-talab-bhopal</p>
            </div>
          </div>
          <hr />

          <div className={style.confirmcontent}>
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
          <hr />
          <div className={style.confirmbuttondiv}>
           
          </div>
        </div>
        <div ref={waitingforDriverref} className={style.confirmride}>
        <div className={style.confirmcancel}>
            <MdCancel
              onClick={() => {
                setLookingRide(false)
              }}
            />
          </div>
          <div className={style.confirmheading}>Looking for a Driver</div>
          <div>
            <img
              src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
              className={style.confirmimg}
              alt=""
            />
          </div>
          <div className={style.confirmcontent}>
            <div className={style.locationlogo}>
              <RiUserLocationFill />
            </div>
            <div className={style.gap}>
              <h2>562/11-A</h2>
              <p>kankiara-talab-bhopal</p>
            </div>
          </div>
          <hr />

          <div className={style.confirmcontent}>
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
          <hr />
          <div className={style.confirmbuttondiv}>
           
          </div>


        </div>
      </div>
    </div>
  );
}
export default Home;
