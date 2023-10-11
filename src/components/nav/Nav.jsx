import React from "react";
import srcLogo from "../../assets/timeless-logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav p-4">
      <a href="/">
        <img width={"100px"} src={srcLogo} alt="" />
      </a>
    </div>
  );
}
