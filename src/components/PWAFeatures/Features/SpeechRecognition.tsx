/**
 * @file SpeechRecognition.tsx
 * Uses Web Speech API to recognize words.
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
// import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import VoiceIcon from 'material-ui/svg-icons/action/record-voice-over';

// TODO: app needs to be privileged to get webspeech API
export interface Props {

}

export interface State {
  value: string;
}

// const w : any = window;
// const recognition = SpeechRecognition || w.webKitSpeechRecognition;

export default class SpeechRecognition extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    console.log('open');
  }

  componentWillUnmount() {
    console.log('close');
  }

  /* User pressed button to start speech recognition */
  handleClick() {
    this.setState({ value: this.state.value + 'words'});
    console.log(this.state.value);
  }

  /* Add text to TextField */
  handleChange(event) {

  }

  render() {
    return(
        <div style={{ textAlign: 'center' }} >
          <VoiceIcon /><br />
          <div className="speech-recognition-text" style={{}}>
            {this.state.value}
          </div>
          <br />
          <FlatButton
            label="Speech Recognition"
            onClick={this.handleClick}
          />
        </div>
    );
  }
}
