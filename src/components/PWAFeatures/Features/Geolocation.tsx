/**
 * @file Geolocation.tsx
 * Gets the geolocation from the browser's navigator.geolocation API
 * and displays that latitude and longitude of the devices current location.
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
import CirclularProgress from 'material-ui/CircularProgress';

import Map from 'material-ui/svg-icons/maps/my-location';

export interface Props {

}

export interface State {
  latitude: number;
  longitude: number;
  progress: boolean;    // show the progress bar when geolocation loading
  errorMessage: string; // error message if feature fails
}

export default class Geolocation extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      progress: false,
      errorMessage: null,
    };

    this.getGeolocation = this.getGeolocation.bind(this);
    this.showError = this.showError.bind(this);
  }

  /* Get latitude and longitude values from navigator */
  getGeolocation() {
    const that = this;
    // start progress bar
    this.setState({
      progress: true,
    });

    // get geolocation & remove progress bar
    navigator.geolocation.getCurrentPosition(function(position) {
      that.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        progress: false,
        errorMessage: null,
      });
    }, this.showError);
  }

  /* Show error if geolocation fails */
  showError(error) {
    let errorMessage : string;
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }
    this.setState({
      progress: null,
      errorMessage: errorMessage,
    });
}

  render() {
    return (
      <div style={{ padding: 10, textAlign: 'center' }}>
        <Map />
        <br />
        { // show progress bar
          this.state.progress &&
          <div className="progress" style={{ padding: 10 }}>
            <CirclularProgress />
            <br />
          </div>
        }
        { // show error message
          this.state.errorMessage &&
          <div className="errorMessage">
          Error: {this.state.errorMessage}
          </div>
        }
        { // show geolocation info
          this.state.latitude &&
          <div className="latLong">
            Latitude: {this.state.latitude}
            <br />
            Longitude: {this.state.longitude}
          </div>
        }
        <FlatButton
          label={"Get geolocation"}
          onTouchTap={this.getGeolocation}
        />
      </div>
    );
  }
}
