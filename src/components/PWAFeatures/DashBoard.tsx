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
import { Card, CardText } from 'material-ui/Card';
import FeatureCard from './FeatureCard';
import features from '../../res/data/features';

export interface Props {

}

export interface State {

}

export default class DashBoard extends React.Component<Props, State>{

  /*
      Show a list of features available.
   */
  render() {
    return(
      <div>
        <Card style={{ margin: 20}}>
          <CardText>
            <h1 style={{textAlign: 'center'}}>Feature Dashboard</h1>
          </CardText>
        </Card>
        {
          features.map((feature) => {
            return (
              <FeatureCard
                key={feature.id}
                feature={feature}
              />
            );
          })
        }
     </div>
    );
  }

}
