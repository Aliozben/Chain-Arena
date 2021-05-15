import React, {useState} from "react";
import "../../css/navBar/Navbar.css";
import {Login} from "../landingPage/Login";
interface Props {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({loggedIn, setLoggedIn}: Props) => {
  const leftButtonName = loggedIn ? "Join To An Arena" : "Log In";
  const rightButtonName = loggedIn ? "Create An Arena" : "Sign In";
  const [loginWindow, setLoginWindow] = useState(false);
  const handleloginWindow = () => {};
  const handleSearchArena = () => {};
  return (
    <nav className="navBar">
      <div
        className="button button_left"
        onClick={
          loggedIn ? handleSearchArena : () => setLoginWindow(!loginWindow)
        }
      >
        {leftButtonName}
      </div>
      <div className="logo">Logo</div>
      <div className="button button_right">{rightButtonName}</div>
      <Login
        loginWindow={loginWindow}
        setLoggedIn={setLoggedIn}
        setLoginWindow={setLoginWindow}
      />
    </nav>
  );
};
export default Navbar;
