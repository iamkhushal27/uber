import { createContext, useState } from "react";
import { data } from "react-router-dom";

export const CaptainDataContext = createContext(null);

const CaptainContext = ({ children }) => {
  const [data, setData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: "",
    },
  });
  return(
  <CaptainDataContext.Provider value={{ data, setData }}>
    {children}
  </CaptainDataContext.Provider>);
};
export default CaptainContext;
