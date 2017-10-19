/**
 * Testing the PushNotification component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PushNotification from '../PWAFeatures/Features/PushNotification';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// mock global navigator PushNotification objects
const mockPushNotification = {
  requestDevice: jest.fn(),
};

const g = global as any;
g.navigator.PushNotification = mockPushNotification;


/*
  ShallowRender.dive() will return <PushNotification /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <PushNotification />
  </MuiThemeProvider>
).dive();

// tests
describe('<PushNotification />', () => {

  it('should render an <FlatButton> tag', () => {
    expect(wrapper().find('FlatButton').length).toEqual(1);
  });

});
