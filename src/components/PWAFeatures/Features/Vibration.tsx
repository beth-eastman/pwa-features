import * as React from 'react';

// Components
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
import VibrateIcon from 'material-ui/svg-icons/notification/vibration';


export default class Vibration extends React.Component<{}, {}> {

  vibrateDevice = () => {
    console.log('vibrate');
    navigator.vibrate(200);
  };

  render() {

    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <VibrateIcon />
        <br />
        <FlatButton
          label="Vibrate"
          onTouchTap={this.vibrateDevice}
        />
      </Card>
    );
  }
}
