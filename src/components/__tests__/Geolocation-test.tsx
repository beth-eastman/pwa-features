/**
 * Testing the Geolocation component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Geolocation from '../PWAFeatures/Features/Geolocation';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// simulated error codes
const err1 = { code:  1, PERMISSION_DENIED: 1  };
const err2 = { code:  2, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2  };
const err3 = { code: 3, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 };
const err4 = { code: 4, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3, UNKNOWN_ERROR: 4 };

// mock global navigator geolocation objects
const mockGeolocation = {
  getCurrentPosition: (callback, error) => callback({coords: {latitude: 100, longitude: 100}}),
  watchPosition: jest.fn()
};

const mockGeolocationFail = {
  getCurrentPosition: (callback, error) => error(err1),
  watchPosition: jest.fn()
};

const g = global as any;
g.navigator.geolocation = mockGeolocation;

// set up component
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Geolocation />
  </MuiThemeProvider>
).dive();

// tests
describe('<Geolocation />', () => {

  it('should have initial state values', () => {
    const wrap = wrapper();
    expect(wrap.state().latitude).toEqual(null);
    expect(wrap.state().longitude).toEqual(null);
    expect(wrap.state().progress).toEqual(false);
    expect(wrap.state().errorMessage).toEqual(null);
  });

  it('should not show any data before <FlatButton /> is clicked', () => {
    const wrap = wrapper();
    expect(wrap.find('.progress').length).toEqual(0);
    expect(wrap.find('.errorMessage').length).toEqual(0);
    expect(wrap.find('.latLong').length).toEqual(0);
  });


  it('showError() show permission denied error', () => {
    const wrap = wrapper();
    wrap.instance().showError(err1);
    expect(wrap.state().errorMessage).toEqual("User denied the request for Geolocation.");
    expect(wrap.find('.errorMessage').length).toEqual(1);
  });

  it('showError() show position unavailable error', () => {
      const wrap = wrapper();
      wrap.instance().showError(err2);
      expect(wrap.state().errorMessage).toEqual("Location information is unavailable.");
  });

  it('showError() show timeout error', () => {
      const wrap = wrapper();
      wrap.instance().showError(err3);
      expect(wrap.state().errorMessage).toEqual("The request to get user location timed out.");
  });

  it('showError() show unknown error', () => {
      const wrap = wrapper();
      wrap.instance().showError(err4);
      expect(wrap.state().errorMessage).toEqual("An unknown error occurred.");
  });

  it('getGeolocation() should set correct latitude and longitude values', () => {
    const wrap = wrapper();
    wrap.instance().getGeolocation();
    // Calling getGeolocation() should set state to (Latitude: 100, Longitude: 100)
    expect(wrap.state().latitude).toEqual(100);
    expect(wrap.state().longitude).toEqual(100);
  });

  it('Pushing <FlatButton /> should show latitude and longitude', () => {
    const wrap = wrapper();

    // simulate user pressing get geolocation button
    wrap.find('FlatButton').simulate('touchTap');

    // state values should be set to the mockGeolocation
    // (latitude: 100, longitude: 100)
    expect(wrap.state().latitude).toEqual(100);
    expect(wrap.state().longitude).toEqual(100);
  });

  it('Pushing <FlatButton /> with error shows error message', () => {
    g.navigator.geolocation = mockGeolocationFail; // geolocation request will fail
    const wrap = wrapper();
    expect(wrap.state().errorMessage).toEqual(null);

    // simulate user pressing get geolocation button
    wrap.find('FlatButton').simulate('touchTap');

    // expect geolocation request to fail
    expect(wrap.state().errorMessage).toEqual("User denied the request for Geolocation.");

    // return geolocation to default value
    g.navigator.geolocation = mockGeolocation;
  });



});
