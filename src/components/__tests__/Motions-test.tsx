/**
 * Testing the Motions component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Motions from '../PWAFeatures/Features/Motions';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// TODO: mock window objects and functions
const mockWindow = {
  Accelerometer: {
    start: jest.fn(),
    stop: jest.fn(),
    x: 2,
    y: 2,
    z: 2,
  },
  Gyroscope: {
    start: jest.fn(),
    stop: jest.fn(),
    x: 1,
    y: 1,
    z: 1,
  },
  DeviceMotionEvent: null,
};

// const g = global as any;
const g = global as any;
g.window = mockWindow;

// set up component
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Motions />
  </MuiThemeProvider>
).dive();

// tests
describe('<Motions />', () => {

  it('should have default initial state', () => {
    const wrap = wrapper();
    expect(wrap.state().open).toEqual(false);
    expect(wrap.state().accelerationNoGravity).toEqual(null);
    expect(wrap.state().accelerationWithGravity).toEqual(null);
    expect(wrap.state().rotation).toEqual(null);
    expect(wrap.state().interval).toEqual(null);
  });

  it('Pressing "Get Motion Buttton" should call getMotions()', () => {
    const wrap = wrapper();
    expect(wrap.state().open).toEqual(false);
    wrap.find('FlatButton').simulate('touchTap');
    expect(wrap.state().open).toEqual(true);
  });

  it('getRotation() should set values correctly', () => {
    const wrap = wrapper();
    const badValues = {alpha: null, beta: null, gamma: null};
    const goodValues = {alpha: 0, beta: 1, gamma: 2};

    wrap.instance().getRotation(goodValues);
    expect(wrap.state().rotation).toEqual([0, 1, 2]);
    // should not set state for null values
    wrap.instance().getRotation(badValues);
    expect(wrap.state().rotation).toEqual([0, 1, 2]);
  });

  it('getIntervalRate() should set state.interval to value passed in', () => {
    const wrap = wrapper();
    wrap.instance().getIntervalRate(2);
    expect(wrap.state().interval).toEqual(2);
  });

  it('getAcceleration() "withoutgravity" arg should set state', () => {
    const wrap = wrapper();
    const acceleration = {x: 1, y: 2, z: 3};
    const nullAccceleration = {x: null, y: null, z: null};
    // expect values to be set in state
    wrap.instance().getAcceleration(acceleration, 'withoutgravity');
    expect(wrap.state().accelerationNoGravity).toEqual([1, 2, 3]);
    // expect null values wont be set in state
    wrap.instance().getAcceleration(nullAccceleration, 'withoutgravity');
    expect(wrap.state().accelerationNoGravity).toEqual([1, 2, 3]);

  });

  it('getAcceleration() "withgravity" arg should set state', () => {
    const wrap = wrapper();
    const acceleration = {x: 1, y: 2, z: 3};
    wrap.instance().getAcceleration(acceleration, 'withgravity');
    expect(wrap.state().accelerationWithGravity).toEqual([1, 2, 3]);
  });

});
