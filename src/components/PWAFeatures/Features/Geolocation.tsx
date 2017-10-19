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

  /* Get latitude and longitude */
  getGeolocation() {
    const that = this;
    // start the circular progress bar
    this.setState({
      progress: true,
    });

    // get the geolocation data & remove circular progress
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

  /* render geolocation card */
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
