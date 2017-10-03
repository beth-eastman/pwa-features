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
import { Card, CardText } from 'material-ui/Card';

export default class BrowserInfoDashBoard extends React.Component<{}, {}> {

  render() {
    console.log(navigator);
    return (
      <div >
        <Card style={{ margin: 20}}>
          <CardText>
            <h1 style={{ textAlign: 'center' }}>Browser Dashboard</h1>
          </CardText>
        </Card>
        <Card style={{ margin: 20}}>
          <CardText>
            Browser Engine Name: {navigator.product} <br /><br />
            Browser Platform: {navigator.platform} <br /><br />
            Browser App Code Name: {navigator.appCodeName} <br /><br />
            Browser App Name: {navigator.appName} <br /><br />
            Browser Version: {navigator.appVersion} <br /><br />
            Browser Language: {navigator.language} <br /><br />
            Browser Online: {navigator.onLine + ''} <br /><br />
            Browser Vendor: {navigator.vendor} <br /><br />
            Browsers Open Location: {window.location.href} <br /><br />
          </CardText>
        </Card>
     </div>
    );
  }
}
