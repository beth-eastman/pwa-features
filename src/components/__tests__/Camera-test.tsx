/**
 * Testing the Camera component
 */
import * as React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Camera from '../PWAFeatures/Features/Camera';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const renderComponent = (props = {}) => mount(
  <MuiThemeProvider>
    <Camera />
  </MuiThemeProvider>
);

describe('<Camera />', () => {

  it('should render 3 <FlatButtons />', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('FlatButton').length).toEqual(3);
  });

  // it('', () => {
  //   const renderedComponent = renderComponent();
  //   expect(renderedComponent.find('').length).toEqual();
  // });
  //
  // it('should take photo if camera open', () => {
  //
  // });
  //
  // it('should not take photo if camera not open', () => {
  //
  // });
});
