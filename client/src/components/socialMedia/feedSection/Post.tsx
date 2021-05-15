import React, {
  ReactElement,
  forwardRef,
  ForwardedRef,
  ForwardRefExoticComponent,
} from "react";
import {Avatar} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import types from "../SocialMediaTypes";
import "../../../css/socialMedia/feedSection/Post.css";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  postInfo: types._Post;
}

const Post = forwardRef(({postInfo}: Props, ref: any) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      avatarSize: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
    })
  );
  const classes = useStyles();

  return (
    <div>
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar className={classes.avatarSize} src={postInfo.avatarLink} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              {postInfo.displayName}
              <span className="post_headerSpecial">
                {postInfo.verified && (
                  <SportsEsportsIcon className="post_badge" />
                )}{" "}
                @{postInfo.username}
              </span>
            </div>
            <div className="post_headerDescription">
              <p>{postInfo.text}</p>
            </div>
          </div>
          <img src={postInfo.image} alt="" />
          <div className="post_footer">
            <IconButton className="post_button">
              <LocalPizzaIcon fontSize="small" className="post_footerIcon" />
            </IconButton>
            <IconButton className="post_button">
              <LocalPizzaIcon fontSize="small" />
            </IconButton>
            <IconButton className="post_button">
              <LocalPizzaIcon fontSize="small" />
            </IconButton>
            <IconButton className="post_button">
              <LocalPizzaIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Post;
