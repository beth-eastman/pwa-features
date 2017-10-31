"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Orientation component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Orientation_1 = require("../PWAFeatures/Features/Orientation");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var orientation = { alpha: 2, beta: 1, gamma: 2 };
var g = global;
g.navigator.getBattery = function (callback) { return callback(orientation); };
/*
  ShallowRender.dive() will return <Bluetooth /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Orientation_1.default, null))).dive(); };
// tests
describe('<Orientation />', function () {
    it('should have default initial state', function () {
        var wrap = wrapper();
        expect(wrap.state().open).toEqual(false);
        expect(wrap.state().alpha).toEqual(null);
        expect(wrap.state().beta).toEqual(null);
        expect(wrap.state().gamma).toEqual(null);
    });
    xit('clicking button should show orientation data', function () {
        var wrap = wrapper();
        expect(wrap.state().open).toEqual(false);
        wrap.find('FlatButton').simulate('touchTap');
        wrap.simulate('deviceorientation', { alpha: 0, beta: 0, gamma: 0 });
        // TODO: fix event dispatch
        expect(wrap.state().open).toEqual(true);
    });
    it('orientation() should set correct alpha/beta/gamma values', function () {
        var wrap = wrapper();
        wrap.instance().orientation({ alpha: -1, beta: -2, gamma: -3 });
        expect(wrap.state().alpha).toEqual(-1);
        expect(wrap.state().beta).toEqual(-2);
        expect(wrap.state().gamma).toEqual(-3);
    });
    xit('should set correct orientation data', function () {
        var wrap = wrapper();
        // simulate user selecting get device orientation
        wrap.find('FlatButton').simulate('touchTap');
        expect(wrap.state().alpha).toEqual(0);
        expect(wrap.state().beta).toEqual(1);
        expect(wrap.state().gamma).toEqual(2);
    });
});
//# sourceMappingURL=Orientation-test.js.map