import * as React from 'react';

// Icons
import BluetoothIcon from 'material-ui/svg-icons/device/bluetooth';

export default class Bluetooth extends React.Component<any,any> {

  // open video canvas if video is playing / recording
  // display photo if photo taken

  constructor(props) {
       super(props);

       this.state = {

       };
   }

  componentWillMount() {}
  componentDidMount() {}

  /* render the camera canvas */
  render() {

    return (
      <div style={{ margin: 20, textAlign: 'center' }}>
          <BluetoothIcon /> coming soon
      </div>
    );
  }
}
