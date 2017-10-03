import * as React from 'react';

// Components
import { Card, CardText }from 'material-ui/Card';
import Divider from 'material-ui/Divider';
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

  /* render the camera canvas */
  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <Map />
        <CardText>
          {this.state.latitude && "Latitude: " + this.state.latitude }
          <br />
          {this.state.longitude && "Longitude: " + this.state.longitude }
        </CardText>
        <Divider />
        <FlatButton
          label={"Get geolocation"}
          onTouchTap={this.getGeolocation}
        />
      </Card>
    );
  }
}
