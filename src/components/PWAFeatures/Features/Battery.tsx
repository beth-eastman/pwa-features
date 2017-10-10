import * as React from 'react';

// Components
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
import BatteryIcon from 'material-ui/svg-icons/device/battery-charging-full';

export interface State {
  batteryCharging: boolean,
  batteryLevel: number,
  batteryChargingTime: number,
  batteryDischargingTime: number,
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
    n.getBattery().then(function(battery) {
      that.setState({
        batteryCharging: battery.charging,
        batteryLevel: battery.level * 100,
        batteryChargingTime: battery.chargingTime,
        batteryDischargingTime: battery.dischargingTime,
      });
      console.log(that.state);
    });
  };

  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <BatteryIcon />
        <br />
        {
          this.state.batteryCharging !== null &&
          <CardText>
              Battery Charging: {this.state.batteryCharging + ''}<br />
              Battery Level: {this.state.batteryLevel}%<br />
              Battery Charging Time: {this.state.batteryChargingTime}<br />
              Battery Discharging Time: {this.state.batteryDischargingTime}<br />
          </CardText>
        }
        <FlatButton
          label="Battery Status"
          onTouchTap={this.getBatteryStatus}
        />
      </Card>
    );
  }
}