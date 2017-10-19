/**
 * Testing the Battery component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Battery from '../PWAFeatures/Features/Battery';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const battery = {
  charging: false,
  level: 0.03,
  chargingTime: Infinity,
  dischargingTime: Infinity,
}

const g = global as any;
g.navigator.getBattery = () => Promise.resolve(battery);

/*
  ShallowRender.dive() will return <Battery /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Battery />
  </MuiThemeProvider>
).dive();

// tests
describe('<Battery />', () => {

  it('should not show data before getBattery() called', () => {
    const wrap = wrapper();
    expect(wrap.find('.battery').length).toEqual(0);
  });

  it('should show data once getBattery() called', (done) => {
    const wrap = wrapper();
    setTimeout(function () {
      wrap.instance().getBatteryStatus().then(
        function () {
          expect(wrap.find('.battery').length).toEqual(1);
          done();
        }
      );
    }, 500);
  });

  it('should have initial state values', () => {
    const wrap = wrapper();
    expect(wrap.state().batteryCharging).toEqual(null);
    expect(wrap.state().batteryLevel).toEqual(null);
    expect(wrap.state().batteryChargingTime).toEqual(null);
    expect(wrap.state().batteryDischargingTime).toEqual(null);
  });

  it('getBattery() should set correct values', (done) => {
    const wrap = wrapper();
    setTimeout(function () {
      wrap.instance().getBatteryStatus().then(
        function () {
          expect(wrap.state().batteryCharging).toEqual(false)
          expect(wrap.state().batteryLevel).toEqual(3);
          expect(wrap.state().batteryChargingTime).toEqual(Infinity);
          expect(wrap.state().batteryDischargingTime).toEqual(Infinity);
          done();
        }
      );
    }, 500);
  });

});
