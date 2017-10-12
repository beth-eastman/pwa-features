import * as React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

// Icons
import DeviceRotation from 'material-ui/svg-icons/device/screen-rotation';

export interface Props {

}

export interface State {
  alpha: number;
  beta: number;
  gamma: number;
  open: boolean; // show orientation values when user starts geolocation service
}


export default class Orientation extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      alpha: null,
      beta: null,
      gamma: null,
      open: false,
    }

    this.orientation = this.orientation.bind(this);
    this.getOrientation = this.getOrientation.bind(this);
  }

  /* Callback function for event listeners to get orientation */
  orientation(event) {
    this.setState({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      open: true,
    });
  }

  /* add event listener for the device's orientation */
  getOrientation() {
    window.addEventListener('deviceorientation', this.orientation);
  }

  /* When component unmounts, remove window event listener */
  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.orientation);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <DeviceRotation />
        <br />
        { this.state.open &&
          <div className="alpha-beta-gamma">
            Alpha:<br />
            {this.state.alpha ? this.state.alpha : 'Not Available'}
            <br />
            Beta:<br />
            {this.state.beta ? this.state.beta : 'Not Available'}
            <br />
            Gamma:<br />
            {this.state.gamma ? this.state.gamma : 'Not Available'}
          </div>
        }
        <FlatButton
          label="Get Orientation Info"
          onTouchTap={this.getOrientation}
        />
      </div>
    );
  }
}
