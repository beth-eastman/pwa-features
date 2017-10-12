import * as React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

// Icons
// import Vibration from 'material-ui/svg-icons/notification/vibration';

export default class PushNotification extends React.Component<{}, {}> {

  sendNotification = () => {
    console.log('set up push notifications');
  };

  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <br />
        <FlatButton
          label="Send Push Notification"
          onTouchTap={this.sendNotification}
        />
      </div>
    );
  }
}
