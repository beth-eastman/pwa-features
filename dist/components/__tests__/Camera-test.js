"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Camera component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Camera_1 = require("../PWAFeatures/Features/Camera");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var stream = 'somestream';
var mockNavigator = {
    getUserMedia: function (callback, error) { return callback(stream); },
    mediaDevices: {
        getUserMedia: function (constraints) { return Promise.resolve(stream); }
    }
};
// Mock window.navigator objects & functions
var g = global;
g.navigator = mockNavigator;
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Camera_1.default, null))).dive(); };
describe('<Camera />', function () {
    it('should have 3 FlatButtons', function () {
        expect(wrapper().find('FlatButton').length).toEqual(3);
    });
    it('should have an <ImageGallery />', function () {
        expect(wrapper().find('ImageGallery').length).toEqual(1);
    });
    it('should have initial state', function () {
        var wrap = wrapper();
        expect(wrap.state().cameraOpen).toEqual(false);
        expect(wrap.state().localMediaStream).toEqual(null);
        expect(wrap.state().open).toEqual(false);
        expect(wrap.state().photos).toEqual([]);
    });
    xit('Open Camera <FlatButton /> should open camera', function () {
        var wrap = wrapper();
        // simulate user clicking 'open camera' button
        wrap.find('.openCameraButton').simulate('touchTap');
        expect(wrap.state().cameraOpen).toEqual(true);
    });
    xit('Stop Camera <FlatButton /> should stop camera', function () {
        var wrap = wrapper();
        // simulate user clicking 'stop camera button'
        wrap.find('.stopCameraButton').simulate('touchTap');
        expect(wrap.state().cameraOpen).toEqual(false);
    });
    xit('Take a Photo <FlatButton /> should take photo', function () {
        var wrap = wrapper();
        wrap.find('.takePhotoButton').simulate('touchTap');
        expect(wrap.state().cameraOpen).toEqual(false);
    });
});
//# sourceMappingURL=Camera-test.js.map