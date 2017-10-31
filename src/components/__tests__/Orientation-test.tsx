/**
 * Testing the Orientation component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Orientation from '../PWAFeatures/Features/Orientation';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const orientation = {alpha: 2, beta: 1, gamma: 2};

const g = global as any;
g.navigator.getBattery = (callback) => callback(orientation);


/*
  ShallowRender.dive() will return <Bluetooth /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Orientation />
  </MuiThemeProvider>
).dive();


// tests
describe('<Orientation />', () => {

  it('should have default initial state', () => {
    const wrap = wrapper();
    expect(wrap.state().open).toEqual(false);
    expect(wrap.state().alpha).toEqual(null);
    expect(wrap.state().beta).toEqual(null);
    expect(wrap.state().gamma).toEqual(null);
  });

  xit('clicking button should show orientation data', () => {
    const wrap = wrapper();
    expect(wrap.state().open).toEqual(false);
    wrap.find('FlatButton').simulate('touchTap');
    wrap.simulate('deviceorientation', {alpha: 0, beta: 0, gamma: 0});

    // TODO: fix event dispatch
    expect(wrap.state().open).toEqual(true);
  });

  it('orientation() should set correct alpha/beta/gamma values', () => {
    const wrap = wrapper();
    wrap.instance().orientation({alpha: -1, beta: -2, gamma: -3});

    expect(wrap.state().alpha).toEqual(-1);
    expect(wrap.state().beta).toEqual(-2);
    expect(wrap.state().gamma).toEqual(-3);
  });

  xit('should set correct orientation data', () => {
      const wrap = wrapper();

      // simulate user selecting get device orientation
      wrap.find('FlatButton').simulate('touchTap');

      expect(wrap.state().alpha).toEqual(0);
      expect(wrap.state().beta).toEqual(1);
      expect(wrap.state().gamma).toEqual(2);
  });



});
