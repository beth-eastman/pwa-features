/**
 * Testing the Vibration component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Vibration from '../PWAFeatures/Features/Vibration';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// mock global navigator Vibration objects


const g = global as any;
g.navigator.vibrate = jest.fn().mockReturnValue(true);

// set up component
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Vibration />
  </MuiThemeProvider>
).dive();

// tests
describe('<Vibration />', () => {

  it('should render an <div> tag', () => {
    const wrap = wrapper();
    expect(wrap.find('div').length).toEqual(1);
  });

  it('vibrateDevice() should vibrate the device', () => {
    const wrap = wrapper();
    expect(wrap.instance().vibrateDevice()).toEqual(true);
  });

  it('vibrateDevice() returns false if device does not vibrate', () => {
    const wrap = wrapper();
    g.navigator.vibrate.mockReturnValueOnce(false);
    expect(wrap.instance().vibrateDevice()).toEqual(false);
  });

  it('Vibrate <FlatButton /> should vibrate when selected', () => {
    const wrap = wrapper();
    wrap.find('FlatButton').simulate('touchTap');
    expect(wrap.instance().vibrateDevice()).toHaveBeenCalled;
  })

});
