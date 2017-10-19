/**
 * Testing the FileAccess component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FileAccess from '../PWAFeatures/Features/FileAccess';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/*
  ShallowRender.dive() will return <FileAccess /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <FileAccess />
  </MuiThemeProvider>
).dive();

// tests
describe('<FileAccess />', () => {

  it('should have <input /> element for files', () => {
    expect(wrapper().find('input').length).toEqual(1);
  });


});
