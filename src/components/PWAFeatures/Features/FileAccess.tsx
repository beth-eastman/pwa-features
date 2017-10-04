import * as React from 'react';

// Components
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
import File from 'material-ui/svg-icons/file/folder';

export default class FileAccess extends React.Component<{}, {}> {

  accessFiles = () => {
    console.log('access device files');
  };

  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <File />
        <br />
        <input type="file" id="input" />
        <output id="list" />
        <FlatButton
          label="Access Files"
          onTouchTap={this.accessFiles}
        />
      </Card>
    );
  }
}
