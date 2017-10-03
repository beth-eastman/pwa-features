import * as React from 'react';

// Components
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ImageGallery from './ImageGallery';
import SnackBar from 'material-ui/Snackbar';

// Icons
import VideoIcon from 'material-ui/svg-icons/av/videocam';
import PhotoIcon from 'material-ui/svg-icons/image/photo-camera';

const images = [];

export default class Camera extends React.Component<any,any> {

  constructor(props) {
       super(props);

       this.state = {
           cameraOpen: false,
           localMediaStream: null,
           open: false,
           photos: [],
       };

      this.testCamera = this.testCamera.bind(this);
      this.stopCamera = this.stopCamera.bind(this);
   }

  /* test the camera */
  testCamera = () => {
      // Prefer camera resolution nearest to 1280x720.
      let constraints = { audio: true, video: { width: 1280, height: 720 } };

      var that = this;

      // get the camera source and play in video element
      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        let video = document.querySelector('video');
        video.srcObject = mediaStream;
        that.setState({ localMediaStream: mediaStream });
        video.onloadedmetadata = function(e) {
          video.play();
          that.setState({ cameraOpen: false });
        };
      })
      .catch(function(err) { console.log(err.name + ": " + err.message); });
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
        this.setState({ cameraOpen: false });
      }

      this.setState({ localMediaStream: null });
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
           }, function(error) {
               console.error("Video capture error: ", error);
           });

    } else {
      this.setState({ cameraOpen: true });
      console.log('error taking photo');
    }
  };

  /* render the camera canvas */
  render() {
    let camera = null;

    if (navigator.getUserMedia) {
      camera = (
        <div>
          <h2>Camera </h2>
            <FlatButton label={"Open Camera"} onTouchTap={this.testCamera} icon={<VideoIcon />} />
            <FlatButton label={"Stop Camera"}  onTouchTap={this.stopCamera} icon={<VideoIcon />} />
            <FlatButton label={"Take a Photo"} onTouchTap={this.takePhoto} icon={<PhotoIcon />} /><br />
            <video  id="video" width="500" height="300" />
            <canvas hidden={true} id="canvas" width="500" height="300" style={{backgroundColor: 'grey'}}></canvas>
          <br />
        </div>
      );
    } else {
      camera = (
        <h3>
          Camera not available in this browser, please upgrade.
        </h3>
      );
    }

    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        {camera}
        {navigator.getUserMedia &&
          <div>
            <Divider />
            <ImageGallery appPage={this.props.appPage} images={images} />
            <SnackBar
              message="Please open the camera to take a photo"  open={this.state.cameraOpen}
            />
          </div>
        }
      </Card>
    );
  }
}
