/**
 * Testing the Geolocation component
 */
import * as React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Geolocation from '../PWAFeatures/Features/Geolocation';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const renderComponent = (props = {}) => mount(
  <MuiThemeProvider>
    <Geolocation />
  </MuiThemeProvider>
);

describe('<Geolocation />', () => {
  it('should render an <CardText> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('FlatButton').length).toEqual(1);
  });
});
