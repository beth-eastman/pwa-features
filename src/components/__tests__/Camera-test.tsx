/**
 * Testing the Camera component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Camera from '../PWAFeatures/Features/Camera';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const stream = 'somestream';

const mockNavigator = {
  getUserMedia: (callback, error) => callback(stream),
  mediaDevices: {
    getUserMedia: (constraints) => Promise.resolve(stream)
  }
};

// Mock window.navigator objects & functions
const g = global as any;
g.navigator = mockNavigator;

const wrapper = () => shallow(
  <MuiThemeProvider>
    <Camera />
  </MuiThemeProvider>
).dive();

describe('<Camera />', () => {

  it('should have 3 FlatButtons', () => {
    expect(wrapper().find('FlatButton').length).toEqual(3);
  });

  it('should have an <ImageGallery />', () => {
    expect(wrapper().find('ImageGallery').length).toEqual(1);
  });

  it('should have initial state', () => {
    const wrap = wrapper();
    expect(wrap.state().cameraOpen).toEqual(false);
    expect(wrap.state().localMediaStream).toEqual(null);
    expect(wrap.state().open).toEqual(false);
    expect(wrap.state().photos).toEqual([]);
  });

  xit('Open Camera <FlatButton /> should open camera', () => {
    const wrap = wrapper();
    // simulate user clicking 'open camera' button
    wrap.find('.openCameraButton').simulate('touchTap');
    expect(wrap.state().cameraOpen).toEqual(true);
  });

  xit('Stop Camera <FlatButton /> should stop camera', () => {
    const wrap = wrapper();
    // simulate user clicking 'stop camera button'
    wrap.find('.stopCameraButton').simulate('touchTap');
    expect(wrap.state().cameraOpen).toEqual(false);
  });

  xit('Take a Photo <FlatButton /> should take photo', () => {
    const wrap = wrapper();
    wrap.find('.takePhotoButton').simulate('touchTap');
    expect(wrap.state().cameraOpen).toEqual(false);
  });

});
