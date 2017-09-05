import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import VideoIcon from 'material-ui/svg-icons/av/videocam';

export interface Props {

}

export interface State {

}

export default class Camera extends React.Component<any,any> {

  // open video canvas if video is playing / recording
  // display photo if photo taken

  state = {
    localMediaStream: null,
  }

  componentWillMount() {
    this.setState({
      localMediaStream: null,
    });
  }

  /* Load the canvas */
  componentDidMount() {
    var c : any = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.font = "10px Arial";

    var x = c.width / 2;
    var y = c.height / 2;

    ctx.textAlign = "center";
    ctx.fillText("Test Camera Below",x,y);
  }

  /* test the camera */
  testCamera = (localMediaStream) => {
    let videoObj = { video: true, audio: true };

    var c : any = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.font = "10px Arial";
    var x = c.width / 2;
    var y = c.height / 2;
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, c.width, c.height);
    if (navigator.getUserMedia) {
      ctx.fillText("Camera Available", x, y);
      var that = this;
      navigator.getUserMedia(videoObj, function(stream) {
              var video = document.querySelector('video');
              video.srcObject = stream;

               that.setState({ localMediaStream: stream});
               console.log(that.state.localMediaStream);

           }, function(error) {
               console.error("Video capture error: ", error);
           });

    } else {
      ctx.fillText("Camera Unavailable",x,y);
    }

  }

  // startCamera = (localMediaStream) => {
  //   if (this.state.localMediaStream) console.log(this.state.localMediaStream);
  // };

  stopCamera = (localMediaStream) => {
    if (this.state.localMediaStream) {
        this.state.localMediaStream.stop();
    }
  };

  /* Take a Photo */
  takePhoto = (localMediaStream) => {
    let videoObj = { video: true, audio: true };

    if (navigator.getUserMedia) {
      navigator.getUserMedia(videoObj, function(stream) {
              var video = document.getElementById("video");
              var canvas : any = document.getElementById("canvas");
              var context = canvas.getContext("2d");
              context.drawImage(video, 0, 0, 500, 300);

           }, function(error) {
               console.error("Video capture error: ", error);
           });

    } else {
      console.log('error taking photo');
    }
  };

  /* render the camera canvas */
  render() {
    return (
      <div style={{ margin: 20, textAlign: 'center' }}>
        <h2>Camera </h2>
        <video  id="video" width="320" height="200"></video>
        <canvas id="canvas" width="500" height="300" style={{backgroundColor: 'grey'}}></canvas>
        <br />
        <FlatButton label={"Start Camera"} onTouchTap={this.testCamera} icon={<VideoIcon />} /><br />
        <FlatButton label={"Stop Camera"}  onTouchTap={this.stopCamera} icon={<VideoIcon />} /><br />
        <FlatButton label={"Take a Photo"} onTouchTap={this.takePhoto} icon={<VideoIcon />} /><br />
      </div>
    );
  }
}
