/* 3D motions using device's accelerometer and gyroscope */
import * as React from 'react';

// Components
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Icons
import DeviceIcon from 'material-ui/svg-icons/device/screen-rotation';

export interface Props {

}

export interface State {
  accelerationNoGravity: number[],
  accelerationWithGravity: number[];
  rotation: number[];
  interval: number;
}

let Accelerometer = null;
let AccelerometerGravity = null;
let Gyroscope = null;

export default class Motions extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      accelerationNoGravity: null,
      accelerationWithGravity: null,
      rotation: null,
      interval: null,
    }

    const w : any = window;
    if ('Accelerometer' in window && 'Gyroscope' in window) {
      Accelerometer = new w.Accelerometer();
      AccelerometerGravity = new w.Accelerometer({ includeGravity: true });
      Gyroscope = new w.Gyroscope;
    }

    // bind functions to component
    this.getAcceleration = this.getAcceleration.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.getIntervalRate = this.getIntervalRate.bind(this);

    // functions to be shared between addEventListener & removeEventListener
    this.accelerationEventHandler = this.accelerationEventHandler.bind(this);
    this.accelerationGravityEventHandler = this.accelerationGravityEventHandler.bind(this);
    this.rotationEventHandler = this.rotationEventHandler.bind(this);
    this.deviceMotionEventHandler = this.deviceMotionEventHandler.bind(this);
  }

  /* Get accelerometer x, y, and z coordinates */
  getAcceleration(acceleration, type) {
    const x = acceleration.x && acceleration.x.toFixed(3);
    const y = acceleration.y && acceleration.y.toFixed(3);
    const z = acceleration.z && acceleration.z.toFixed(3);

    if ('withoutgravity') {
      this.setState({
        accelerationNoGravity: [x, y, z]
      });
    } else {
      this.setState({
        accelerationWithGravity: [x, y, z]
      });
    }
  }

  /*
   * Sets the rate (alpha, beta, gamma) at which the device is rotating
   * around each of its axes in degrees per second.
   * alpha: rate at which the device is rotating about its Z axis;
   * beta: rate at which the device is rotating about its X axis; front to back.
   * gamma: rate at which the device is rotating about its Y axis; side to side.
   */
  getRotation(rotation) {
    const alpha = rotation.alpha && rotation.alpha.toFixed(3);
    const beta = rotation.beta && rotation.beta.toFixed(3);
    const gamma = rotation.gamma && rotation.gamma.toFixed(3);

    // TODO: FIX keeps getting called after component dismounts
    if (alpha || beta || gamma) {
      this.setState({
        rotation: [alpha, beta, gamma],
      });
    }
  }

  /*
   * Sets the interval, in milliseconds, at which data is obtained from the device.
   * Intervals are used to determine the granularity of motion events.
   */
  getIntervalRate(interval) {
    this.setState({
      interval: interval,
    });
  }

  accelerationEventHandler() {
    this.getAcceleration(Accelerometer, 'withoutgravity');
  }

  accelerationGravityEventHandler() {
    this.getAcceleration(AccelerometerGravity, 'withgravity')
  }

  rotationEventHandler() {
    this.getRotation({
      alpha: Gyroscope.x,
      beta: Gyroscope.y,
      gamma: Gyroscope.z
    });
  }

  deviceMotionEventHandler(event) {
    this.getAcceleration(event.acceleration, 'withoutgravity');
    this.getAcceleration(event.accelerationIncludingGravity, 'withgravity');
    this.getRotation(event.rotationRate);
    this.getIntervalRate(event.interval);
  }

  /* Set up event listeners for device motions when component mounts */
  componentWillMount() {
    if ('Accelerometer' in window && 'Gyroscope' in window) {
      // start accelerometer
      Accelerometer.addEventListener(
        'reading',
        this.accelerationEventHandler
      );
      Accelerometer.start();

      // start accelerometer with gravity
      AccelerometerGravity.addEventListener(
        'reading',
        this.accelerationGravityEventHandler
      );
      AccelerometerGravity.start();

      // start gyroscope
      Gyroscope.addEventListener(
        'reading',
        this.rotationEventHandler
      );
      Gyroscope.start();

    } else if ('DeviceMotionEvent' in window) {
      window.addEventListener(
        'devicemotion',
        this.deviceMotionEventHandler,
        false
      );
    }
  }

  /* Remove event listeners when component will dismount */
  componentWillUnmount() {
    if ('Accelerometer' in window && 'Gyroscope' in window) {
      // stop Accelerometer
      Accelerometer.removeEventListener(
        'reading',
        this.accelerationEventHandler
      );
      Accelerometer.stop();

      // stop Accelerometer with gravity
      AccelerometerGravity.removeEventListener(
        'reading', this.accelerationGravityEventHandler
      );
      AccelerometerGravity.stop();

      // stop Gyroscope
      Gyroscope.removeEventListener(
        'reading',
        this.rotationEventHandler
      );
      Gyroscope.stop();

    } else if ('DeviceMotionEvent' in window) {
      window.removeEventListener(
        'devicemotion',
        this.deviceMotionEventHandler,
        false
      );
    }
  }

  // TODO: fix setSate being called after the component dismounts

  render() {
    const notAvailable = 'Not Available';
    return (
      <Card style={{ padding: 10, textAlign: 'center' }}>
        <DeviceIcon />
        <br />
        <CardText>
          <b>Acceleration (No Gravity):</b><br />
          {this.state.accelerationNoGravity ?
            this.state.accelerationNoGravity.toString() :
            notAvailable
          }
          <br />
          <b>Acceleration (W/ Gravity):</b><br />
          {this.state.accelerationWithGravity ?
            this.state.accelerationWithGravity.toString() :
            notAvailable
          }
          <br />
          <b>Rotation:</b><br />
          {this.state.rotation ?
            this.state.rotation.toString() :
            notAvailable
          }
          <br />
          <b>Interval:</b><br />
          {this.state.interval ?
            this.state.interval :
            notAvailable
          }
          <br />
        </CardText>
        <FlatButton
          label="Motions"
        />
      </Card>
    );
  }
}
