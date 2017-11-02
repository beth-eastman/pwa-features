/**
 * @file Microphone.tsx
 * Use browser getUserMedia api to use the microphone
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
import FlatButton from 'material-ui/FlatButton';

import MicrophoneIcon from 'material-ui/svg-icons/hardware/keyboard-voice';

export interface Props {

}

export interface State {
  localMediaStream: any;
  open: boolean;
  recordings: any;
}

export default class Microphone extends React.Component<Props, State> {

  constructor(props) {
       super(props);

       this.state = {
           localMediaStream: null,
           open: false,
           recordings: [],
       };

       this.getUserMedia = this.getUserMedia.bind(this);
       this.getStream = this.getStream.bind(this);
       this.stopStream = this.stopStream.bind(this);
   }

  /*
   * Check if getUserMedia is available and return the appropriate API
   * used by the current browser
   */
  getUserMedia(options, successCallback, failureCallback) {
    const n : any = navigator;
    var api = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    if (api) {
      return api.bind(n)(options, successCallback, failureCallback);
    }
  }

  /* Use the getUserMedia API to get the video stream */
  getStream() {
      const n : any = navigator;
      const w : any = window;

      let constraints = {};
      constraints['audio'] = true;
      const that = this;
      this.getUserMedia(constraints, function(stream) {
        let mediaControl : any = document.querySelector('audio');
        if (n.mozGetUserMedia) {
          mediaControl.mozSrcObject = stream;
          that.setState({
            localMediaStream: stream
          });
        } else {
          mediaControl.srcObject = stream;
          mediaControl.src = (w.URL || w.webkitURL).createObjectURL(stream);
          that.setState({
            localMediaStream: stream
          });
        }
      }, function(err) {
      });
  }

  /* Stops and streams from being sent to the audio output */
  stopStream() {
    const n : any = navigator;
    let mediaControl : any = document.querySelector('audio');

    if (n.mozGetUserMedia) {
      mediaControl.mozSrcObject = null;
    } else {
      mediaControl.srcObject = null;
      mediaControl.src = null;
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <MicrophoneIcon />
        <br />
        <audio controls></audio><br />
        <FlatButton label={"Record"} onTouchTap={this.getStream} /><br />
        <FlatButton label={"Stop Recording"} onTouchTap={this.stopStream} /><br />
      </div>
    );
  }
}
