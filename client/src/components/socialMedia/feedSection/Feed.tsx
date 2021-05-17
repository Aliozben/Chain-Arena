import React, {ReactElement, useEffect, useState} from "react";
import Axios, {AxiosResponse} from "axios";

import "../../../css/socialMedia/feedSection/Feed.css";

import Post from "./Post";
import ShareBox from "./ShareBox";
import types from "../SocialMediaTypes";
import {DATABASE} from "../../../constants/index";

import Png from "../../../foto.png";
import axios from "axios";

interface Props {}

const Feed = ({}: Props): ReactElement => {
  const [posts, setPosts] = useState<types._Post[]>([]);
  useEffect(() => {
    (async () => {
      const a: AxiosResponse = await axios.get("/social/feed");
      setPosts(
        a.data.map(
          (b: any) =>
            ({
              displayName: b.display_name,
              username: b.user_name,
              text: b.text,
            } as types._Post)
        )
      );
    })();
  }, []);
  const handleSharePost = (postInfo: types._Post) => {
    const newPost = {...posts, postInfo};
    setPosts(newPost);
  };
  return (
    <div className="feed">
      <div className="feed_header">Home</div>
      <ShareBox
        onSharePost={() => handleSharePost}
        posts={posts}
        setPosts={setPosts}
      />
      {posts.map(post => (
        <Post key={post.id} postInfo={post} />
      ))}
    </div>
  );
};

export default Feed;
