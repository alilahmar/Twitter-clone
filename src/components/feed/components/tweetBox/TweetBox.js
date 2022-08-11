import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../../firebase";
import "./tweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Aloulou",
      userName: "ali",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaeqpYSQChSlOlaEUSBWxbxLKR3MxZiVJfbJqNvN5c8xHEFJOe8r_-xAwtUkKIS1mcIY&usqp=CAU",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Enter image URL "
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
