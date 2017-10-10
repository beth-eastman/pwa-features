import * as React from 'react';

import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import BluetoothIcon from 'material-ui/svg-icons/device/bluetooth';

export interface Props {

}

export interface State {
  batteryPercentage: number,
  bluetoothCapable: boolean,
  bluetoothConnected: boolean,
  errorMessage: string,
}

export default class Bluetooth extends React.Component<Props, State> {

  constructor(props) {
       super(props);

       this.state = {
         batteryPercentage: null,
         bluetoothCapable: false,
         bluetoothConnected: false,
         errorMessage: null,
       };
   }

  /* Check if bluetooth is available */
  componentWillMount() {
    if ('bluetooth' in navigator) {
      this.setState({
        bluetoothCapable: true,
      });
    }
  }

  /* Connect to bluetooth low energy */
  connect = () => {
    const that = this;
    const n = navigator as any;

    // TODO: fix some provided filters
    let options = {
      filters: [
        {services: ['heart_rate']},
        {services: [0x1802, 0x1803]},
        {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
        {services: ['battery_service']}
      ],
    }

    n.bluetooth.requestDevice(options).then(function(device) {
      console.log('Name: ' + device.name);
      console.log('Paired: ' + device.paired);
    })
    .catch(function(error) {
      console.log("Something went wrong. " + error);
      that.setState({
        errorMessage: error.toString(),
      });
    });
  }

  /* render the camera canvas */
  render() {

    return (
      <Card style={{ margin: 20, padding: 10, textAlign: 'center' }}>
          <BluetoothIcon />
          <br />
          { this.state.batteryPercentage &&
            <CardText>
            Device Battery Percentage is: <br />
            {this.state.batteryPercentage}<br />
            </CardText>
          }
          { this.state.errorMessage &&
            <CardText>
            {this.state.errorMessage}
            </CardText>
          }
          <FlatButton
            label="Connect"
            disabled={!this.state.bluetoothCapable}
            onTouchTap={() => {this.connect()}}
          />
      </Card>
    );
  }
}
