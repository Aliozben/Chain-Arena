import * as React from "react";
import {SvgIconComponent} from "@material-ui/icons";
import "../../../css/socialMedia/sidebarSection/SidebarSection.css";

interface Props {
  text: string;
  Icon: SvgIconComponent;
  active?: boolean;
}
const SidebarSelection = ({active, text, Icon}: Props) => {
  return (
    <>
      <div className={active ? "sidebarSection --active" : "sidebarSection"}>
        <Icon />
        <span>{text}</span>
      </div>
    </>
  );
};
export default SidebarSelection;
