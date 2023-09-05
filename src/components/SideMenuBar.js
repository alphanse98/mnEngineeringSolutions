import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/close_FILL0_wght400_GRAD0_opsz48.png";
import openIcon from "../assets/menu_FILL0_wght400_GRAD0_opsz48.png";

const SideMenuBar = () => {
  const [menuActive, setmenuActive] = useState(true);
  const navigation = useNavigate();

  return (
    <>
      {menuActive ? (
        <div className="menuBar">
          <img
            src={closeIcon}
            alt="closeIcon"
            className="closeIcon"
            onClick={() => setmenuActive(false)}
          ></img>
          <div className="menuBarOption" onClick={() => navigation("/")}>
            Home
          </div>
          <div className="menuBarOption" onClick={() => navigation("/user")}>
            Users
          </div>
        </div>
      ) : (
        <div >
          <img
            src={openIcon}
            alt="openIcon"
            className="openIcon"
            onClick={() => setmenuActive(true)}
          ></img>
        </div>
      )}
    </>
  );
};
export default SideMenuBar;
