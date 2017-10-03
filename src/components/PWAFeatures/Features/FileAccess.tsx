import * as React from 'react';

// Components
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
// import Vibration from 'material-ui/svg-icons/notification/vibration';

export default class FileAccess extends React.Component<{}, {}> {

  accessFiles = () => {
    console.log('access device files');
  };

  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <br />
        <FlatButton
          label="Access Files"
          onTouchTap={this.accessFiles}
        />
      </Card>
    );
  }
}
