import { useState } from "react";
import NavContext from "./navContext";

const navContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navPos, setNavPos] = useState<number>(0);

  return (
    <NavContext.Provider value={{ navPos, setNavPos }}>
      {children}
    </NavContext.Provider>
  );
};

export default navContextProvider;
