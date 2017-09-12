/**
 * @file AppRoutes.tsx
 * File responsible for setting routes for the application.
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
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import RouteItem from './RouteItem';
import RouteGroup from './RouteGroup';

// Components
import DashBoard from './PWAFeatures/DashBoard';
import BrowserInfoDashBoard from './PWAFeatures/BrowserInfoDashBoard';
import Camera from './PWAFeatures/Camera';
import Bluetooth from './PWAFeatures/Bluetooth';

export interface Props {
  appPage: AppPageInterface
}

export interface State {

}
class AppRoutes extends React.Component<Props, State>{


  render() {

    const props = {...this.props, basePath: '/'};

    return <RouteGroup defaultProps={props} appPage={this.props.appPage}>
                <RouteItem tab={0} title={'Dash'} exact path="/" componentPage={DashBoard} />
                <RouteItem tab={1} title={'Browser'} exact path="/browser" componentPage={BrowserInfoDashBoard}/>
                <RouteItem tab={2} title={'Camera'} exact path="/camera" componentPage={Camera} />
                <RouteItem tab={3} title={'Bluetooth'} exact path="/bluetooth" componentPage={Bluetooth}/>
    </RouteGroup>;

  }
}

export default withRouter(AppRoutes);
