/**
 * @file FeatureCard.tsx
 * Card with Feature capability information for a device. Displays whether
 * a feature is enabled, feature details, as well as the ability
 * to test the function if it is enabled on the device.
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

// material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Done from 'material-ui/svg-icons/action/done';
import HighlightRemove from 'material-ui/svg-icons/action/highlight-off'

import { FeatureInterface } from '../../res/data/features';

import Dialog from 'material-ui/Dialog';

const Check = (<Done style={{color: 'green'}} />);
const None = (<HighlightRemove style={{color: 'darkred'}}/>);

export interface Props {
  feature: FeatureInterface;
}

export interface State {
  open: boolean,
}

export default class FeatureCard extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  // TODO: fix expandable function conditionally on feature enabled
  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return(
        <Card style={{ margin: 20}}>
          <CardHeader
            style={{
              backgroundColor: this.props.feature.featureEnabled ? 'lightgreen' : 'lightcoral'
            }}
            title={this.props.feature.featureName}
            subtitle={this.props.feature.featureEnabled ? 'Supported' : 'Not Supported'}
            avatar={
              this.props.feature.featureEnabled ? Check : None
            }
            actAsExpander={true}
            showExpandableButton={this.props.feature.featureEnabled}
          />
          <CardText expandable={true}>
            {this.props.feature.featureDetails}
          </CardText>
          <Divider />
          <CardActions expandable={true}>
            <FlatButton
              style={{ margin: 10 }}
              label={"Test " + this.props.feature.featureName}
              disabled={!this.props.feature.featureEnabled}
              onTouchTap={ this.handleOpen }
            />
          </CardActions>
          <Dialog
            title={"Test " + this.props.feature.featureName}
            actions={actions}
            modal={false}
            open={this.state.open}
            autoScrollBodyContent={true}
            onRequestClose={this.handleClose}
          >
            { this.props.feature.component }
          </Dialog>
        </Card>
    );
  }
}
