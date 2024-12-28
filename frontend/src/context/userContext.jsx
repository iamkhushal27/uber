import { createContext } from "react";

export const UserDataContext = createContext();
const UserContext=({ children })=> {
  const user = "khushal";
  return (
    <>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </>
  );
}
export default UserContext;