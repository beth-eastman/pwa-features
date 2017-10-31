"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Vibration component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Vibration_1 = require("../PWAFeatures/Features/Vibration");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// mock global navigator Vibration objects
var g = global;
g.navigator.vibrate = jest.fn().mockReturnValue(true);
// set up component
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Vibration_1.default, null))).dive(); };
// tests
describe('<Vibration />', function () {
    it('should render an <div> tag', function () {
        var wrap = wrapper();
        expect(wrap.find('div').length).toEqual(1);
    });
    it('vibrateDevice() should vibrate the device', function () {
        var wrap = wrapper();
        expect(wrap.instance().vibrateDevice()).toEqual(true);
    });
    it('vibrateDevice() returns false if device does not vibrate', function () {
        var wrap = wrapper();
        // mock vibrate feature to be unsuccessfull
        g.navigator.vibrate.mockReturnValueOnce(false);
        expect(wrap.instance().vibrateDevice()).toEqual(false);
    });
    it('Vibrate <FlatButton /> should vibrate when selected', function () {
        var wrap = wrapper();
        // simulate user selecting vibrate button
        wrap.find('FlatButton').simulate('touchTap');
        expect(wrap.instance().vibrateDevice()).toHaveBeenCalled;
    });
});
//# sourceMappingURL=Vibration-test.js.map