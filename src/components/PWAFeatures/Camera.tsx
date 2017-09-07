import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ImageGallery from './ImageGallery';

import VideoIcon from 'material-ui/svg-icons/av/videocam';
import PhotoIcon from 'material-ui/svg-icons/image/photo-camera';

const images = [];

export default class Camera extends React.Component<any,any> {

  // open video canvas if video is playing / recording
  // display photo if photo taken

  constructor(props) {
       super(props);

       this.state = {
           localMediaStream: null,
           open: false,
           photos: [],
       };

      this.testCamera = this.testCamera.bind(this);
      this.stopCamera = this.stopCamera.bind(this);
   }

  /* Load the canvas */
  componentDidMount() {
    var c : any = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.font = "10px Arial";

    var x = c.width / 2;
    var y = c.height / 2;

    ctx.textAlign = "center";
    ctx.fillText("Test Camera Below", x, y);
  }

  /* test the camera */
  testCamera = (localMediaStream) => {
      // Prefer camera resolution nearest to 1280x720.
      let constraints = { audio: true, video: { width: 1280, height: 720 } };
      console.log(this.state);
      var that = this;

      // get the camera source and play in video element
      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        let video = document.querySelector('video');
        video.srcObject = mediaStream;
        that.setState({ localMediaStream: mediaStream });
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
  }

  /* stop current video stream */
  stopCamera = () => {
    if (this.state.localMediaStream) {
      let video = document.querySelector('video');
      let stream = video.srcObject;
      let tracks = stream.getTracks();

      // for each current track stop the video
      for (let track of tracks) {
        track.stop();
      }

      this.setState({ localMediaStream: null });

      console.log('Vid off');
    } else {
      console.log('No video is available')
    }
  };

  /* Take a Photo */
  takePhoto = () => {
    let videoObj = { video: true, audio: true };
    const that = this;
    if (navigator.getUserMedia && this.state.localMediaStream) {
      navigator.getUserMedia(videoObj, function(stream) {
              var video = document.getElementById("video");
              var canvas : any = document.getElementById("canvas");
              var context = canvas.getContext("2d");
              context.drawImage(video, 0, 0, 500, 300);
              const data = canvas.toDataURL("image/png");
              images.push(data);
              that.setState({ photos: [] });
              // context.
           }, function(error) {
               console.error("Video capture error: ", error);
           });

    } else {
      console.log('error taking photo');
    }
  };

  /* render the camera canvas */
  render() {
    let camera = null;

    if (navigator.getUserMedia) {
      camera = (
        <div style={{ backgroundColor: 'grey'}}>
          <h2>Camera </h2>
            <FlatButton label={"Start Video"} onTouchTap={this.testCamera} icon={<VideoIcon />} />
            <FlatButton label={"Stop Video"}  onTouchTap={this.stopCamera} icon={<VideoIcon />} />
            <FlatButton label={"Take a Photo"} onTouchTap={this.takePhoto} icon={<PhotoIcon />} /><br />
            <video  id="video" width="500" height="300" />
            <canvas hidden={true} id="canvas" width="500" height="300" style={{backgroundColor: 'grey'}}></canvas>
          <br />
        </div>
      );
    } else {
      camera = (
        <div>
          Camera not available in this browser, please upgrade.
        </div>
      );
    }

    return (
      <div style={{ margin: 20, textAlign: 'center' }}>
        {camera}
        <ImageGallery appPage={this.props.appPage} images={images} />
      </div>
    );
  }
}
