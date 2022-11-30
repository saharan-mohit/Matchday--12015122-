import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Button from "../shared/Button";
import "./VideoPage.css";

const VideoPage = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  return (
    <div>
      <div className="video-head">
        <div className="main">Video Analytics</div>
      </div>
      <div className="video-body">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=_gAMKKOyU8A`}
          playing={playing}
          ref={playerRef}
          controls
        />
      </div>
      <div className="video-actions">
        <Button
          btnValue="Rewind"
          onHandleClick={() => {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
          }}
        />
        <Button
          btnValue="pause"
          onHandleClick={() => {
            setPlaying(false);
          }}
        />

        <Button
          btnValue="play"
          onHandleClick={() => {
            setPlaying(true);
          }}
        />
        <Button
          btnValue="Forward"
          onHandleClick={() => {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
          }}
        />
      </div>
    </div>
  );
};

export default VideoPage;
