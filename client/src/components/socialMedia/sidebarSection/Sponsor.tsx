import React from "react";
import "../../../css/socialMedia/sidebarSection/Sponsor.css";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Photo from "../../../foto.png";

interface Props {}

const Sponsor = (props: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      avatarSize: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
    })
  );
  const classes = useStyles();

  return (
    <div className="sponsor">
      <div className="sponsor_avatar">
        <Avatar className={classes.avatarSize} src={Photo} />
      </div>
      Selam
      <Button className="sponsor_button">GO </Button>
    </div>
  );
};

export default Sponsor;
