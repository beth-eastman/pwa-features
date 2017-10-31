"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Battery component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Battery_1 = require("../PWAFeatures/Features/Battery");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// values to test <Battery /> state set
var battery = {
    charging: false,
    level: 0.03,
    chargingTime: Infinity,
    dischargingTime: Infinity,
};
var g = global;
g.navigator.getBattery = function () { return Promise.resolve(battery); };
/*
  ShallowRender.dive() will return <Battery /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Battery_1.default, null))).dive(); };
// tests
describe('<Battery />', function () {
    it('should not show data before getBattery() called', function () {
        var wrap = wrapper();
        expect(wrap.find('.battery').length).toEqual(0);
    });
    it('should show data once getBattery() called', function (done) {
        var wrap = wrapper();
        setTimeout(function () {
            wrap.instance().getBatteryStatus().then(function () {
                expect(wrap.find('.battery').length).toEqual(1);
                done();
            });
        }, 500);
    });
    it('should have initial state values', function () {
        var wrap = wrapper();
        expect(wrap.state().batteryCharging).toEqual(null);
        expect(wrap.state().batteryLevel).toEqual(null);
        expect(wrap.state().batteryChargingTime).toEqual(null);
        expect(wrap.state().batteryDischargingTime).toEqual(null);
    });
    it('getBattery() should set correct values', function (done) {
        var wrap = wrapper();
        setTimeout(function () {
            wrap.instance().getBatteryStatus().then(function () {
                expect(wrap.state().batteryCharging).toEqual(false);
                expect(wrap.state().batteryLevel).toEqual(3);
                expect(wrap.state().batteryChargingTime).toEqual(Infinity);
                expect(wrap.state().batteryDischargingTime).toEqual(Infinity);
                done();
            });
        }, 500);
    });
});
//# sourceMappingURL=Battery-test.js.map