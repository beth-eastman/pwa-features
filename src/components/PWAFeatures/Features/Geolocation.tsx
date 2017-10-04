import * as React from 'react';

// Components
import { Card, CardText }from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Map from 'material-ui/svg-icons/maps/my-location';

export interface Props {

}

export interface State {
  latitude: number,
  longitude: number,
}

export default class Geolocation extends React.Component<Props, State> {

  constructor(props) {
       super(props);

       this.state = {
         latitude: null,
         longitude: null,
       };
   }

  /* Get latitude and longitude */
  getGeolocation = () => {
    const that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      that.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      console.log(that.state);
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  /* render geolocation card */
  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <Map />
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
