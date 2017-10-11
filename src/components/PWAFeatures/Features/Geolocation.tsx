import * as React from 'react';

// Components
import { Card, CardText }from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CirclularProgress from 'material-ui/CircularProgress';

import Map from 'material-ui/svg-icons/maps/my-location';

export interface Props {

}

export interface State {
  latitude: number,
  longitude: number,
  progress: boolean, // show the progress bar when geolocation loading
}

export default class Geolocation extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      progress: false,
    };

    this.getGeolocation = this.getGeolocation.bind(this);
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
      });
    });
  }

  /* render geolocation card */
  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <Map />
        <br />
        {
          this.state.progress &&
          <div style={{ padding: 10 }}>
            <CirclularProgress />
            <br />
          </div>
        }
        { this.state.latitude &&
          <CardText>
            Latitude: {this.state.latitude}
            <br />
            Longitude: {this.state.longitude}
          </CardText>
        }
        <FlatButton
          label={"Get geolocation"}
          onTouchTap={this.getGeolocation}
        />
      </Card>
    );
  }
}
