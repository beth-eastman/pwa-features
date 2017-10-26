/**
 * @file Battery.tsx
 * Access the devices battery information from the browser Battery API
 * Note: this feature is no longer has support and can be removed at any time
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
import BatteryIcon from 'material-ui/svg-icons/device/battery-charging-full';

export interface State {
  batteryCharging: boolean;
  batteryLevel: number;
  batteryChargingTime: number;
  batteryDischargingTime: number;
}

export default class Battery extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      batteryCharging: null,
      batteryLevel: null,
      batteryChargingTime: null,
      batteryDischargingTime: null,
    }
  }

  getBatteryStatus = () => {
    var that = this;
    var n : any = navigator;
    return n.getBattery().then(function(battery) {
      that.setState({
        batteryCharging: battery.charging,
        batteryLevel: battery.level * 100,
        batteryChargingTime: battery.chargingTime,
        batteryDischargingTime: battery.dischargingTime,
      });
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BatteryIcon />
        <br />
        {
          this.state.batteryCharging !== null &&
          <div className="battery">
              Battery Charging: {this.state.batteryCharging + ''}<br />
              Battery Level: {this.state.batteryLevel}%<br />
              Battery Charging Time: {this.state.batteryChargingTime}<br />
              Battery Discharging Time: {this.state.batteryDischargingTime}<br />
          </div>
        }
        <FlatButton
          label="Battery Status"
          onTouchTap={this.getBatteryStatus}
        />
      </div>
    );
  }
}
