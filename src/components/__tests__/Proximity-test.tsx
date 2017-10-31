import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';
import Proximity from '../PWAFeatures/Features/Proximity';

/*
  Shallow render returns <Proximity />
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Proximity />
  </MuiThemeProvider>
).dive();

describe('<Proximity />', () => {

  it('should get exact distance', () => {
    const wrap = wrapper();
    const testValue = {value: 100, min: 0, max: 0};
    const expectedValue = '100 cm (0-0 cm range)';
    wrap.instance().getDistance(testValue);
    expect(wrap.state().distance).toEqual(expectedValue);
  });

  it('should get near proximity', () => {
    const wrap = wrapper();
    const testValue = {near: true};
    const expectedValue = 'near';
    // expect getProximity to set state to near when near received
    wrap.instance().getProximity(testValue);
    expect(wrap.state().proximity).toEqual(expectedValue);
  });

  it('should get far proximity', () => {
    const wrap = wrapper();
    const testValue = {near: false};
    const expectedValue = 'far';
    // expect getProximity to set state to far when not near received
    wrap.instance().getProximity(testValue);
    expect(wrap.state().proximity).toEqual(expectedValue);
  });

});
