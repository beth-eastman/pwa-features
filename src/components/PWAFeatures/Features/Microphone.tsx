import * as React from 'react';

// Components
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import MicrophoneIcon from 'material-ui/svg-icons/hardware/keyboard-voice';

export interface Props {

}

export interface State {
  microphoneOpen: boolean,
  localMediaStream: any,
  open: boolean,
  recordings: any,
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

  /* render the camera canvas */
  render() {

    // if (navigator.getUserMedia) {
    //
    // }

    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <MicrophoneIcon />
        <br />
        <input type="file" accept="audio/*;capture=microphone" />
        <Divider />
        <FlatButton label={"Record"} onTouchTap={this.testMicrophone} />
        <FlatButton label={"Stop Recording"} onTouchTap={this.stopMicrophone} />
      </Card>
    );
  }
}
