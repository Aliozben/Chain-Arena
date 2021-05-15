import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import "../../css/landingPage/LandingPage.css";

import Register from "./Register";

interface Props {}
const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="landing_page">
      <div className="main_desc">
        <div></div>
      </div>
      <Register />
    </div>
  );
};

export default LandingPage;
