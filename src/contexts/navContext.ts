import { createContext } from "react";

interface NavContextValue {
  navPos: number;
  setNavPos: React.Dispatch<React.SetStateAction<number>>;
}

const NavContext = createContext<NavContextValue>({
  navPos: 0,
  setNavPos: () => {},
});

export default NavContext;
