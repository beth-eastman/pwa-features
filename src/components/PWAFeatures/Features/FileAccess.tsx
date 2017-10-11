import * as React from 'react';

// Components
import Card from 'material-ui/Card';

// Icons
import File from 'material-ui/svg-icons/file/folder';

export default class FileAccess extends React.Component<{}, {}> {

  render() {
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <File />
        <br />
        <input style={{ border: '1px solid' }} type="file" id="input" />
        <br />
      </Card>
    );
  }
}
