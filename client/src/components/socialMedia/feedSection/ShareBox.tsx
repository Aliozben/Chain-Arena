import React, {useState} from "react";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IconButton from "@material-ui/core/IconButton";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Axios, {AxiosResponse} from "axios";

import "../../../css/socialMedia/feedSection/ShareBox.css";
import types from "../SocialMediaTypes";

import Png from "../../../foto.png";
interface Props {
  onSharePost: (postInfo: types._Post) => {};
  posts: types._Post[];
  setPosts: React.Dispatch<React.SetStateAction<types._Post[]>>;
}

const ShareBox = ({onSharePost, posts, setPosts}: Props) => {
  const [contentMessage, setContentMessage] = useState("");
  const [showImage, setShowImage] = useState<string[]>([]);
  const [contentImages, setContentImages] = useState([]);

  const sharePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(contentImages).map(key => {
      const file = contentImages[parseInt(key)];
      fd.append("uploads", file);
    });
    fd.append("text", contentMessage);
    await Axios.post("/api/social/feed", fd, {
      headers: {"Content-Type": "multipart/form-data"},
    }).then((res: AxiosResponse) => {});
  };

  const handleFiles = (e: any) => {
    setContentImages(e.target.files);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );
      setShowImage(filesArray);
      Array.from(e.target.files).map(
        file => URL.revokeObjectURL(file as string) // avoid memory leak
      );
    }
  };
  const renderPhotos = (source: string[]) => {
    return source.map((photo: string) => {
      return <img width="75px" height="75px" src={photo} alt="" key={photo} />;
    });
  };
  return (
    <div className="shareBox">
      <form onSubmit={sharePost}>
        <div className="shareBox_input">
          <Avatar src={Png} />
          <TextareaAutosize
            onChange={e => setContentMessage(e.target.value)}
            className="textarea"
            placeholder="What's Up my Dawgg.."
          />
        </div>
        <div className="shareBox_buttons">
          <div className="shareBox_icons">
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              multiple
              onChange={e => handleFiles(e)}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                className="icon"
                aria-label="upload picture"
                component="span"
              >
                <PublishOutlinedIcon />
              </IconButton>
            </label>
            <IconButton className="icon">
              <PublishOutlinedIcon />
            </IconButton>
            <IconButton className="icon">
              <PublishOutlinedIcon />
            </IconButton>
            <IconButton className="icon">
              <PublishOutlinedIcon />
            </IconButton>
          </div>
          <div className="button_container">
            <Button type="submit" className="shareBox_shareButton">
              Publish
            </Button>
          </div>
        </div>
        <div className="file_container">
          <AvatarGroup max={4}>
            {showImage && renderPhotos(showImage)}
          </AvatarGroup>
        </div>
      </form>
    </div>
  );
};

export default ShareBox;
