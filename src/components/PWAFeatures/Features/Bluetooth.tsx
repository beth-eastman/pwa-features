/**
 * @file Bluetooth.tsx
 * Accesses Low Energy Bluetooth devices and gets the battery percentage.
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

import FlatButton from 'material-ui/FlatButton';
import BluetoothIcon from 'material-ui/svg-icons/device/bluetooth';

export interface Props {

}

export interface State {
  batteryPercentage: number;
  bluetoothCapable: boolean;
  bluetoothConnected: boolean;
  errorMessage: string;
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

       this.connect = this.connect.bind(this);
   }

  /* Check if bluetooth is available */
  componentWillMount() {
    if ('bluetooth' in navigator) {
      this.setState({
        bluetoothCapable: true,
      });
    }
  }

  /* Connect to bluetooth low energy and set state to battery percentage
   * if the connection is valid
   */
  connect() {
    const that = this;
    const n = navigator as any;

    let options = {
      filters: [
        {services: ['battery_service']}
      ],
    }

    n.bluetooth.requestDevice(options).then(function (device) {
      return device.gatt.connect();
    })
    .then(function (server) {
      return server.getPrimaryService('battery_service');
    })
    .then(function (service) {
      return service.getCharacteristic('battery_level');
    })
    .then(function (characteristic) {
      return characteristic.readValue();
    })
    .then(function (value) {
      that.setState({
        batteryPercentage: value.getUint8(0),
      });
    })
    .catch(function(error) {
      that.setState({
        errorMessage: error.toString(),
      });
    });
  }

  /* render the camera canvas */
  render() {

    return (
      <div style={{ textAlign: 'center' }}>
          <BluetoothIcon/>
          <br />
          {
            this.state.batteryPercentage &&
            <div className="batteryPercentage">
            Device Battery Percentage is: <br />
            {this.state.batteryPercentage}<br />
            </div>
          }
          {
            this.state.errorMessage &&
            <div className="errorMessage">
              {this.state.errorMessage}
            </div>
          }
          <FlatButton
            label="Connect"
            disabled={!this.state.bluetoothCapable}
            onTouchTap={() => {this.connect()}}
          />
      </div>
    );
  }
}
