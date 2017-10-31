/**
 * @file Camera.tsx
 * Uses browser's camera to take photos, allows user to download
 * the photos
 *
 * PWA Features
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import * as React from 'react';

// Components
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
      this.takePhoto = this.takePhoto.bind(this);
   }

  /* test the camera */
  testCamera() {
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
  stopCamera() {
    if (this.state.localMediaStream) {
      let video = document.querySelector('video');
      let stream = video.srcObject;
      let tracks = stream.getTracks();

      // for each current track stop the video
      for (let track of tracks) {
        track.stop();
      }

      tracks = null;
      video.srcObject = null;

      this.setState({
        cameraOpen: false,
        localMediaStream: null
      });
    }
  }

  /* Take a Photo and add image to image gallery */
  takePhoto() {
    let videoObj = { video: true, audio: true };
    const that = this;

    if (navigator.getUserMedia && this.state.localMediaStream) {
      navigator.getUserMedia(videoObj,
        function(stream) {
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
      this.setState({ cameraOpen: false });
    }
  };

  /* render the camera canvas */
  render() {
    let camera = null;
    camera = (
      <div>
        <h2>Camera </h2>
          <FlatButton
            className="openCameraButton"
            label={"Open Camera"}
            onTouchTap={this.testCamera}
            icon={<VideoIcon />} />
          <FlatButton
            className="stopCameraButton"
            label={"Stop Camera"}
            onTouchTap={this.stopCamera}
            icon={<VideoIcon />} />
          <FlatButton
            className="takePhotoButton"
            label={"Take a Photo"}
            onTouchTap={this.takePhoto}
            icon={<PhotoIcon />} />
            <br />
          <video  id="video" width="500" height="300" />
          <canvas hidden={true} id="canvas" width="500" height="300"></canvas>
        <br />
      </div>
    );

    return (
      <div style={{ textAlign: 'center' }}>
        {camera}
        <Divider />
        <ImageGallery images={images} />
        <SnackBar
          message="Please open the camera to take a photo"
          open={this.state.cameraOpen}
        />
      </div>
    );
  }
}
