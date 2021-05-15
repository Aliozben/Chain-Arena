import React from "react";
import Feed from "./feedSection/Feed";
import Sidebar from "./sidebarSection/Sidebar";
import "../../css/socialMedia/SocialMedia.css";
import ProfileSection from "./profileSection/ProfileSection";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <Sidebar />
      <Feed />
      <ProfileSection />
    </div>
  );
};

export default SocialMedia;
