import React, { useEffect, useState } from "react";
import Post from "./components/post/Post";
import TweetBox from "./components/tweetBox/TweetBox";
import db from "../../firebase";
import FlipMove from "react-flip-move";
import "./feed.css";

const Feed = () => {
  // state
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home </h2>
      </div>
      {/* tweetBox */}
      <TweetBox />
      {/* Posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
