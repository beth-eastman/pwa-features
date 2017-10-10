import * as React from 'react';

// Components
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
import DeviceRotation from 'material-ui/svg-icons/device/screen-rotation';

export interface Props {

}

export interface State {
  alpha: number,
  beta: number,
  gamma: number,
}


export default class Orientation extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      alpha: null,
      beta: null,
      gamma: null,
    }

    this.orientation = this.orientation.bind(this);
  }

  /* Callback function for event listeners to get orientation */
  orientation(event) {
    this.setState({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  }

  /* add event listener for the device's orientation */
  getOrienation = () => {
    window.addEventListener('deviceorientation', this.orientation);
  };

  /* When component unmounts, remove window event listener */
  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.orientation);
  }

  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <DeviceRotation />
        <br />
        { (this.state.alpha || this.state.beta || this.state.gamma) &&
          <CardText>
            Alpha:<br />
            {this.state.alpha ? this.state.alpha : 'Not Available'}
            <br />
            Beta:<br />
            {this.state.beta ? this.state.beta : 'Not Available'}
            <br />
            Gamma:<br />
            {this.state.gamma ? this.state.gamma : 'Not Available'}
          </CardText>
        }
        <FlatButton
          label="Get Orientation Info"
          onTouchTap={this.getOrienation}
        />
      </Card>
    );
  }
}
