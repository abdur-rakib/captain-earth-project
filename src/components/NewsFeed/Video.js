import React, { Component } from "react";
import VideoPlayer from "react-video-markers";
import "./Video.css";

class Video extends Component {
  state = {
    isPlaying: false,
    volume: 0.7,
  };

  handlePlay = () => {
    this.setState({ isPlaying: true });
  };

  handlePause = () => {
    this.setState({ isPlaying: false });
  };

  handleVolume = (value) => {
    this.setState({ volume: value });
  };

  render() {
    const { isPlaying, volume } = this.state;

    return (
      <VideoPlayer
        url={this.props.url}
        isPlaying={isPlaying}
        volume={volume}
        onPlay={this.handlePlay}
        onPause={this.handlePause}
        onVolume={this.handleVolume}
      />
    );
  }
}

export default Video;
