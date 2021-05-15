import React from "react";

import "../../../css/socialMedia/profileSection/ProfileSection.css";

import Profile from "./Profile";
import {RightSectionBars} from "./RightSectionBars";

interface Props {}

const ProfileSection = (props: Props) => {
  return (
    <div className="profileSection">
      <Profile />
      <RightSectionBars />
    </div>
  );
};

export default ProfileSection;
