import React, {useContext} from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../../../css/socialMedia/profileSection/RightSectionBars.css";

import {RightSection} from "./RightSection";
import {LogedContext} from "../../App";
import AuthService from "../../common/AuthService";

interface Props {}

export const RightSectionBars = (props: Props) => {
  const authService = new AuthService();
  const setLoggedIn = useContext(LogedContext);
  return (
    <div className="rightSectionBars">
      <RightSection
        Icon={ExitToAppIcon}
        text="Logout"
        handleClick={() => {
          authService.logout();
          setLoggedIn(false);
        }}
      />
    </div>
  );
};
