import * as React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

// Icons
import VibrateIcon from 'material-ui/svg-icons/notification/vibration';

export default class Vibration extends React.Component<{}, {}> {

  /* Use browser navigator to vibrate device */
  vibrateDevice = () => {
    navigator.vibrate(200);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <VibrateIcon />
        <br />
        <FlatButton
          label="Vibrate"
          onTouchTap={this.vibrateDevice}
        />
      </div>
    );
  }
}
