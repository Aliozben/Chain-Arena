import React from "react";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

interface Props {
  color: string;
  contentText: string;
}

export const ButtonInput = ({color, contentText}: Props) => {
  //   const useStyles = makeStyles((theme: Theme) => {
  //     createStyles({
  //       asdd: {
  //         backgroundColor: color,
  //         borderRadius: 0,
  //       },
  //     });
  //   });

  const styles = {
    asdd: {
      backgroundColor: "blue",
      borderRadius: 0,
    },
  };
  withStyles(styles);
  //  const classes = useStyles();
  return (
    <div>{/* <Button className={styles.asdd}>{contentText}</Button> */}</div>
  );
};
