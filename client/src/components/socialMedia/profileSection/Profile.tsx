import React from "react";
import "../../../css/socialMedia/profileSection/Profile.css";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import AdbIcon from "@material-ui/icons/Adb";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";

import Png from "../../../foto.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatarStyle: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface Props {}

const Profile = (props: Props) => {
  const classes = useStyles();
  return (
    <div className="profile">
      <div className="profile_borderDiv">
        <div className="profile_mainDiv">
          <div className="profile_header">
            <Avatar src={Png} className={classes.avatarStyle} />
            <div className="header_name">
              Cengizhan Reyiz
              <div className="header_banners">
                <AdbIcon fontSize="small" />
                <MoneyOffIcon fontSize="small" />
                <AdbIcon fontSize="small" />
                <AdbIcon fontSize="small" />
              </div>
            </div>
          </div>
          <div className="wallet">
            <MoneyOffIcon fontSize="large" />
            <span> Btc:0.1231412342134123..</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
