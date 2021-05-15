import React from "react";
import {SvgIconComponent} from "@material-ui/icons";

import "../../../css/socialMedia/profileSection/RightSection.css";
interface Props {
  text: string;
  Icon: SvgIconComponent;
  active?: boolean;
  handleClick?: () => void;
}
export const RightSection = ({active, text, Icon, handleClick}: Props) => {
  return (
    <>
      <div
        className={active ? "rightSection --active" : "rightSection"}
        onClick={handleClick}
      >
        <Icon />
        <span>{text}</span>
      </div>
    </>
  );
};
