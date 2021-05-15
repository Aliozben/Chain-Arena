import * as React from "react";
import SidebarSection from "./SidebarSection";
import "../../../css/socialMedia/sidebarSection/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import RouterIcon from "@material-ui/icons/Router";

import SponsorBox from "./SponsorBox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar_icon">Logo</h2>
      <SidebarSection active={true} text="Home" Icon={HomeIcon} />
      <SidebarSection text="Discover" Icon={PeopleIcon} />
      <SidebarSection text="Messages" Icon={ChatIcon} />
      <SidebarSection text="Find Chainer" Icon={RouterIcon} />
      <SidebarSection text="Standings" Icon={AccountTreeIcon} />
      <SidebarSection text="Profile" Icon={AssignmentIndIcon} />
      <SponsorBox />
    </div>
  );
};
export default Sidebar;
