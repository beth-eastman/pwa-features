/**
 * @file Proximity.tsx
 * Use browser Proximity API to get device's distance to an object.
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

export interface Props {

}

export interface State {
  distance: string,
  proximity: string,
}

export default class Proximity extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      distance: null,
      proximity: null
    };

    this.getDistance = this.getDistance.bind(this);
    this.getProximity = this.getProximity.bind(this);
  }

  componentWillMount() {
    window.addEventListener('deviceproximity', this.getDistance);
    window.addEventListener('userproximity', this.getProximity);
  }

  componentWillDismount() {
    window.removeEventListener('deviceproximity', this.getDistance);
    window.removeEventListener('userproximity', this.getProximity);
  }

  getDistance(event) {
    this.setState({
      distance: event.value.toFixed(0) + ' cm ('
        + event.min.toFixed(0) + '-' + event.max.toFixed(0) + ' cm range)',
    });
  }

  getProximity(event) {
    this.setState({
      proximity: event.near ? 'near' : 'far'
    });
  }

  render() {
    return(
      <div>
        Distance: {this.state.distance ? this.state.distance : 'Unknown'}
        <br />
        Proximity: {this.state.proximity ? this.state.proximity : 'Unknown'}
      </div>
    );
  }
}
