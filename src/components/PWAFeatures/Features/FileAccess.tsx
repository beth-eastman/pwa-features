import * as React from 'react';

// Icons
import File from 'material-ui/svg-icons/file/folder';

export default class FileAccess extends React.Component<{}, {}> {

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <File />style={{ textAlign: 'center' }}
        <br />
        <input style={{ border: '1px solid' }} type="file" id="input" />
        <br />
      </div>
    );
  }
}
