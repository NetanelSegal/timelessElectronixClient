import srcLogo from "../../../assets/timeless-logo.png";
import { Link } from "react-router-dom";
import SideMenu from "./sideMenu/SideMenu";
import { useState } from "react";
import srcIconBurger from "../../../assets/icons/menu-burger.svg";
import srcIconExit from "../../../assets/icons/menu-x.svg";
import { AnimatePresence } from "framer-motion";

const NavMobile = ({ isConnected }) => {
  const [isSideMenuOn, setiIsSideMenuOn] = useState(false);

  return (
    <div
      id="nav"
      className="nav flex h-14 flex-wrap items-center justify-between py-2 text-right"
    >
      <Link to={"/"}>
        <img className="h-8" src={srcLogo} alt="Timeless Electronix logo" />
      </Link>

      <button
        onClick={() => {
          setiIsSideMenuOn((prevState) => !prevState);
        }}
        className="relative z-20 rounded-lg bg-green-600 px-2 py-1"
      >
        {isSideMenuOn ? (
          <img style={{ width: "30px" }} src={srcIconExit} alt="" />
        ) : (
          <>
            <img style={{ width: "30px" }} src={srcIconBurger} alt="" />
          </>
        )}
      </button>
      <AnimatePresence>
        {isSideMenuOn && (
          <SideMenu
            key={"sideMenu"}
            setiIsSideMenuOn={setiIsSideMenuOn}
            isSideMenuOn={isSideMenuOn}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
