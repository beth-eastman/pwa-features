/**
 * @file DashBoard.tsx
 * Dashboard for PWA functionalities for device
 *
 * Created by Bethany Eastman on 08/22/2017
 *
 * T2 PWA Starter
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
import {AppPageInterface} from '../Main';
import FeatureCard from './FeatureCard';

// material-ui
import {Card, CardText} from 'material-ui/Card';
// import WiFi from 'material-ui/svg-icons/notification/wifi';

// const Online = (<WiFi style={{ color: 'green' }} />);
// const Offline = (<WiFi style={{ color: 'grey' }} />);

export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  latitude: number,
  longitude: number,
  batteryPercentage: number,
  isCharging: boolean,
  chargingTime: number,
  dischargingTime: number,
}

export default class DashBoard extends React.Component<Props, State>{

  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      batteryPercentage: null,
      isCharging: null,
      chargingTime: null,
      dischargingTime: null,
    }
  }

  /* Send Local Notification */
  sendLocalNotification = () => {
    // NOT USED BESIDES CHROME BROWSER
  }

  /* Send push notifcation to device */
  sendPush = () => {
    alert('TODO: SEND PUSH');
  }

  /* Get device battery information */
  getBattery = () => {

    const n = navigator as any;
    const that = this;
    n.getBattery().then(function(battery) {
      console.log(battery.level * 100 + '%');
      console.log(battery.charging ? "Battery Charging" : "Battery Not Charing");
      console.log(battery.chargingTime);
      console.log(battery.dischargingTime);
      that.setState({
        batteryPercentage: battery.level * 100,
        isCharging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    });
  }

  /* Get users location from navigator */
  getLocation = () => {
    const that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      that.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  /* Use device vibration */
  deviceVibrate = () => {
    console.log(navigator.vibrate);
  }

  render() {

    console.log(window);

    const n = navigator as any;
    const w = window as any;

    // const onlineCapable = navigator.onLine ? true : false;
    const cameraCapable = (n.getUserMedia || n.webkitGetUserMedia ||
    n.mozGetUserMedia || n.msGetUserMedia) !== false;                                     //
    const michrophoneCapable = (n.getUserMedia || n.webkitGetUserMedia ||
    n.mozGetUserMedia || n.msGetUserMedia) !== false;                                //
    const blueToothCapable = 'bluetooth' in navigator;                                  //
    const pushNotificationsCapable = 'serviceWorker' in navigator;
    const vibrationCapable = navigator.vibrate ? true : false;
    const proximityCapable = false;
    const batteryStatusCapable = ('getBattery' in navigator || ('battery' in navigator && 'Promise' in window)) !== false;
    const geolocation = navigator.geolocation ? true : false;
    const fileAccessCapable = w.File !== undefined;
    const vrCapable = false;

    // Online Status - { onlineCapable ? Online : Offline } <br /><br />

    return(
      <div>
        <Card style={{ margin: 20}}>
          <CardText>
            <h1 style={{textAlign: 'center'}}>Feature Dashboard</h1>
          </CardText>
        </Card>

        <FeatureCard
          featureName={"Camera"}
          featureDetails={"Take photo or video"}
          featureEnabled={cameraCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ')}}
        />
        <FeatureCard
          featureName={"Microphone"}
          featureDetails={"Use Device Microphone"}
          featureEnabled={michrophoneCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />
        <FeatureCard
          featureName={"Bluetooth"}
          featureDetails={"Use Bluetooth Low Energy connected to Device"}
          featureEnabled={blueToothCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />
        <FeatureCard
          featureName={"Push Notification"}
          featureDetails={"Get Push Notificatons"}
          featureEnabled={pushNotificationsCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />
        <FeatureCard
          featureName={"Proximity"}
          featureDetails={"Get Proximity of Device"}
          featureEnabled={proximityCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />


        <FeatureCard
          featureName={"Battery"}
          featureDetails={"Device Battery Stats"}
          featureEnabled={batteryStatusCapable}
          testFeatureFunction={() => { this.getBattery()}}
        />
        <FeatureCard
          featureName={"Vibration"}
          featureDetails={"Device vibration"}
          featureEnabled={vibrationCapable}
          testFeatureFunction={() => {console.log('test vibration feature')}}
        />
        <FeatureCard
          featureName={"Geolocation"}
          featureDetails={"Get device location"}
          featureEnabled={geolocation}
          testFeatureFunction={() => {this.getLocation()}}
        />

        <FeatureCard
          featureName={"File Access"}
          featureDetails={"Access the device local files"}
          featureEnabled={fileAccessCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />

        <FeatureCard
          featureName={"Virtual Reality"}
          featureDetails={"Use Virtual Reality Device"}
          featureEnabled={vrCapable}
          testFeatureFunction={() => { console.log(' /////////// TODO /////////// ') }}
        />
     </div>
    );
  }
}

// Vibration - {vibrationCapable ? Check : None}
//   <FlatButton style={{ margin: 10}} onTouchTap={this.deviceVibrate}>Vibrate</FlatButton><br /><br />

// Battery - { batteryStatusCapable + '' }
//     <FlatButton style={{ margin: 10}} onTouchTap={this.getBattery}>Battery Info</FlatButton><br /><br />
//     {this.state.batteryPercentage && <b>{"Battery Level: " + this.state.batteryPercentage}<br />
//                                     {" Battery Charging: " + this.state.isCharging}<br />
//                                     {" Charging Time: " + this.state.chargingTime}<br />
//                                     {" Discharging Time: " + this.state.dischargingTime}</b>}<br />

// Geolocation - { geolocation ? Check : None}
//     <FlatButton style={{ margin: 10}} onTouchTap={this.getLocation}>Get Geolocation</FlatButton>
//         {this.state.latitude && <b>{"Latitude: " + this.state.latitude + " Longitude: " + this.state.longitude}</b>}
