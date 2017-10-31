/**
 * Testing the PushNotification component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PushNotification from '../PWAFeatures/Features/PushNotification';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/*
  ShallowRender.dive() will return <PushNotification /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <PushNotification
      enable={jest.fn()}
      disable={jest.fn()}
      pushNotifications={false}
    />
  </MuiThemeProvider>
).dive();

// tests
describe('<PushNotification />', () => {

  it('should render an <FlatButton> tag', () => {
    expect(wrapper().find('FlatButton').length).toEqual(1);
  });

  it('should show enable push notification button', () => {
    expect(wrapper().find('FlatButton').props().label).toEqual("Send Push Notifications");
  });

});
