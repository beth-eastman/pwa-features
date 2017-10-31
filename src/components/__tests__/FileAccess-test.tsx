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

const mockFiles = [
  {name: '1', type: 'file', size: 3, lastModifiedDate: {toTimeString: () => {'2'}}},
  {name: '2', type: 'img', size: 2, lastModifiedDate: {toTimeString: () => {'3'}}}
]

// tests
describe('<FileAccess />', () => {

  it('should have initial state', () => {
    expect(wrapper().state().length).toEqual(0);
  });

  it('should have <input /> element for files', () => {
    expect(wrapper().find('input').length).toEqual(1);
  });

  it('handleFiles() should add all files', () => {
    const wrap = wrapper();
    wrap.instance().handleFiles(mockFiles);
    expect(wrap.state().length).toEqual(2);
  });

});
