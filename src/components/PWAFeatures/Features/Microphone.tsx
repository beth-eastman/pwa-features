import * as React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

import MicrophoneIcon from 'material-ui/svg-icons/hardware/keyboard-voice';

export interface Props {

}

export interface State {
  microphoneOpen: boolean;
  localMediaStream: any;
  open: boolean;
  recordings: any;
}

export default class Microphone extends React.Component<Props, State> {

  constructor(props) {
       super(props);

       this.state = {
           microphoneOpen: false,
           localMediaStream: null,
           open: false,
           recordings: [],
       };
   }

  /* test the camera */
  testMicrophone = () => {
    console.log('test microphone');
  }

  /* stop current video stream */
  stopMicrophone = () => {
    console.log('stop microphone');
  };

  /* Microphone */
  recordMicrophone = () => {
    console.log('mircrophonerecording');
  };

  getUserMedia = (options, successCallback, failureCallback)  => {
    const n : any = navigator;
    var api = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    if (api) {
      return api.bind(n)(options, successCallback, failureCallback);
    }
    console.log('User Media API not supported.');
  }

  getStream = () => {
      const n : any = navigator;
      const w : any = window;

      let constraints = {};
      constraints['audio'] = true;

      this.getUserMedia(constraints, function(stream) {
        let mediaControl : any = document.querySelector('audio');

        if (n.mozGetUserMedia) {
          mediaControl.mozSrcObject = stream;
        } else {
          mediaControl.srcObject = stream;
          mediaControl.src = (w.URL || w.webkitURL).createObjectURL(stream);
        }
      }, function(err) {
          console.log('Error: ' + err);
      });
  }

  stopStream = () => {
    const n : any = navigator;
    let mediaControl : any = document.querySelector('audio');

    if (n.mozGetUserMedia) {
      mediaControl.mozSrcObject = null;
    } else {
      mediaControl.srcObject = null;
      mediaControl.src = null;
    }

  }

  /* render the camera canvas */
  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <MicrophoneIcon />
        <br />
        <input type="file" accept="audio/*;capture=microphone" />
        <br />
        <FlatButton label={"Record"} onTouchTap={this.getStream} />
        <FlatButton label={"Stop Recording"} onTouchTap={this.stopStream} />
        <audio controls></audio>
      </div>
    );
  }
}
