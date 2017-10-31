/**
 * Testing the Microphone component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Microphone from '../PWAFeatures/Features/Microphone';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const g = global as any;
g.navigator.getUserMedia = jest.fn().mockReturnValue('stream');

/*
  ShallowRender.dive() will return <Microphone /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <Microphone />
  </MuiThemeProvider>
).dive();

// tests
describe('<Microphone />', () => {

  it('initial open state should be false', () => {
    expect(wrapper().state('open')).toBe(false);
  });

  xit('getUserMedia() should get correct userMedia object for browser', () => {
      // const wrap = wrapper();
  });

  xit('getStream() should create stream', () => {
      const wrap = wrapper();
      wrap.instance().getStream();

      expect(wrap.state().localMediaStream).not.toBeNull();
  });

});
