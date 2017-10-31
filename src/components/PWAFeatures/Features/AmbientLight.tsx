/**
 * @file AmbientLight.tsx
 * Use browser AmbientLight feature from 'devicelight' event.
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

export interface Props {

}

export interface State {
  type: string;
}

export default class AmbientLight extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      type: null
    }

    this.getAmbient = this.getAmbient.bind(this);
  }

  componentWillMount() {
    window.addEventListener('devicelight', this.getAmbient);
  }

  componentWillDismount() {
    window.removeEventListener('devicelight', this.getAmbient);
  }

  /*
    When event listener is trigger, getAmbient() will take the devicelight event,
    and set the state whether the ambient light is dark or bright.
   */
  getAmbient(event) {
    if (event.value < 50) {
      this.setState({
        type: 'darklight'
      });
    } else {
      this.setState({
        type: 'brightlight'
      });
    }
  }

  render() {
    return(
      <div>
        Light Type:
        {
          this.state.type ?
          this.state.type : 'Unknown'
         }
      </div>
    );
  }
}
