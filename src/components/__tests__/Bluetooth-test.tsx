/**
 * Testing the Bluetooth component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bluetooth from '../PWAFeatures/Features/Bluetooth';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// mock global navigator Bluetooth objects
const mockBluetooth = {
  requestDevice: jest.fn(),
};

const g = global as any;
g.navigator.bluetooth = mockBluetooth;


/*
  ShallowRender.dive() will return <Bluetooth /> component
 */
const wrapper = shallow(
  <MuiThemeProvider>
    <Bluetooth />
  </MuiThemeProvider>
).dive();

// tests
describe('<Bluetooth />', () => {

  it('should render an <FlatButton> tag', () => {
    // const renderedComponent = renderComponent();
    expect(wrapper.find('FlatButton').length).toEqual(1);
  });

  it('should have null initial state values', () => {
    expect(wrapper.state().batteryPercentage).toEqual(null);
    // inital bluetooth capable value is true since navigator.bluetooth defined
    expect(wrapper.state().bluetoothCapable).toEqual(true);
    expect(wrapper.state().bluetoothConnected).toEqual(false);
    expect(wrapper.state().errorMessage).toEqual(null);
  });

  it('should not show battery percentage on load', () => {
    expect(wrapper.find('.batteryPercentage').length).toEqual(0);
  });

  it('should not show error message on load', () => {
    expect(wrapper.find('.errorMessage').length).toEqual(0);
  });

  xit('should show error message thrown from failed requestDevice() request', () => {
    // wrapper.find('FlatButton').props().onTouchTap();
    const errorMessage = 'Something broke';
    const expectedError = new Error(errorMessage);
    mockBluetooth.requestDevice.mockImplementationOnce(
      () => Promise.reject(expectedError)
    );

    wrapper.find('FlatButton').simulate('touchTap');
    // console.log(wrapper.state());
    expect(wrapper.state().errorMessage).toEqual(errorMessage);
  });

  xit('should show battery percentage on successful requestDevice() request', () => {
    const bluetoothDevice = {
      name: 'Test Device',
      paired: false,
      batteryPercentage: 50
    };
    mockBluetooth.requestDevice.mockImplementationOnce(
      () => Promise.resolve(bluetoothDevice)
    );
    wrapper.find('FlatButton').simulate('touchTap');

    expect(wrapper.state().batteryPercentage).toEqual(50);
  });

});
