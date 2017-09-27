/**
 * @file HomePage.tsx
 * Home page for the store demo.
 *
 * Created by Jack LightFoot on 08/22/2017
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
// import {AppPageInterface} from '../Main';
// import {Card, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

export interface Props {
  // appPage: AppPageInterface;
}
//
// interface Navigator {
//     getUserMedia(
//         options: { video?: boolean; audio?: boolean; },
//         success: (stream: any) => void,
//         error?: (error: string) => void
//         ) : void;
//     battery: any;
//     webkitBattery: any;
//     mozBattery: any;
//     getBattery: any;
// }



export default class BatteryManager extends React.Component<Props, {}>{

  state = {
    batteryStatus: "NaN",
  }

  logBattery(battery) {
    console.log(battery.level);
    console.log(battery.charging);
    // console.log(dischargingTime);

    battery.addEventListener('chargingchange', function() {
          console.log('Battery chargingchange event: ' + battery.charging);
      }, false);
  }

  componentDidMount() {
    console.log("component mounted");
    if (navigator) {
      console.log(navigator);
    } else {
      this.setState({
        batteryStatus: "not available"
      });
    }
  }

  render() {
    return(
      <div>{this.state.batteryStatus}</div>
    );
  }
}