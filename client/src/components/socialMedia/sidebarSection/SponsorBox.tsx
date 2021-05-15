import React from "react";
import "../../../css/socialMedia/sidebarSection/SponsorBox.css";
import Sponsor from "./Sponsor";

interface Props {}

const SponsorBox = (props: Props) => {
  return (
    <div className="border_box">
      <div className="sponsor_box">
        <div>
          <Sponsor />
          <Sponsor />
        </div>
        <div>
          <Sponsor />
          <Sponsor />
        </div>
      </div>
    </div>
  );
};

export default SponsorBox;
