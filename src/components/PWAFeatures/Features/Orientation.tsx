/**
 * @file Orientation.tsx
 * Uses the browsers 'deviceorientationevent' listener to get the current
 * orientation of the device in values of alpha, beta, and gamma.
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

// Icons
import DeviceRotation from 'material-ui/svg-icons/device/screen-rotation';

export interface Props {

}

export interface State {
  alpha: number;
  beta: number;
  gamma: number;
  open: boolean; // show orientation values when user starts geolocation service
}


export default class Orientation extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      alpha: null,
      beta: null,
      gamma: null,
      open: false,
    }

    this.orientation = this.orientation.bind(this);
    this.getOrientation = this.getOrientation.bind(this);
  }

  /* Callback function for event listeners to get orientation */
  orientation(event) {
    this.setState({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      open: true,
    });
  }

  /* add event listener for the device's orientation */
  getOrientation() {
    window.addEventListener('deviceorientation', this.orientation);
  }

  /* When component unmounts, remove window event listener */
  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.orientation);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <DeviceRotation />
        <br />
        {
          this.state.open &&
          <div className="alpha-beta-gamma">
            Alpha:<br />
            {this.state.alpha ? this.state.alpha : 'Not Available'}
            <br />
            Beta:<br />
            {this.state.beta ? this.state.beta : 'Not Available'}
            <br />
            Gamma:<br />
            {this.state.gamma ? this.state.gamma : 'Not Available'}
          </div>
        }
        <FlatButton
          label="Get Orientation Info"
          onTouchTap={this.getOrientation}
        />
      </div>
    );
  }
}
