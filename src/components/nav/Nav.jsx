import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../context/userContext";
import AppContext from "../../context/appContext";
import NavMobile from "./navMobile/NavMobile";
import NavDesktop from "./navDesktop/NavDesktop";

export default function Nav() {
  const { userInfo } = useContext(UserContext);
  const { screenWidth } = useContext(AppContext);
  const isMobile = screenWidth <= 768;

  return (
    <>
      {isMobile ? <NavMobile /> : <NavDesktop />}
      <Outlet />
    </>
  );
}
