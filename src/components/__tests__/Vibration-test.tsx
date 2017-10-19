/**
 * Testing the Vibration component
 */
import * as React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Vibration from '../PWAFeatures/Features/Vibration';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// mock global navigator Vibration objects
const mockVibration = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

const g = global as any;
g.navigator.Vibration = mockVibration;

// set up component
const renderComponent = (props = {}) => mount(
  <MuiThemeProvider>
    <Vibration />
  </MuiThemeProvider>
);

// tests
describe('<Vibration />', () => {

  it('should render an <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toEqual(2);
  });

});
