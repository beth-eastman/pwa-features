import * as React from 'react';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import BluetoothIcon from 'material-ui/svg-icons/device/bluetooth';

export interface Props {

}

export interface State {
  bluetoothCapable: boolean,
  bluetoothConnected: boolean,
}

export default class Bluetooth extends React.Component<Props, State> {

  constructor(props) {
       super(props);

       this.state = {
         bluetoothCapable: false,
         bluetoothConnected: false,
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
    var n = navigator as any;
    console.log(n);
    // n.bluetooth.requestDevice();
  }

  /* render the camera canvas */
  render() {

    return (
      <Card style={{ margin: 20, padding: 10, textAlign: 'center' }}>
          <BluetoothIcon />
          <h3>Bluetooth functionality coming soon</h3>
          <FlatButton
            label="Connect"
            disabled={!this.state.bluetoothCapable}
            onTouchTap={() => {this.connect()}}
          />
      </Card>
    );
  }
}
