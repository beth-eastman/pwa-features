"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var enzyme_1 = require("enzyme");
var Proximity_1 = require("../PWAFeatures/Features/Proximity");
/*
  Shallow render returns <Proximity />
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Proximity_1.default, null))).dive(); };
describe('<Proximity />', function () {
    it('should get exact distance', function () {
        var wrap = wrapper();
        var testValue = { value: 100, min: 0, max: 0 };
        var expectedValue = '100 cm (0-0 cm range)';
        wrap.instance().getDistance(testValue);
        expect(wrap.state().distance).toEqual(expectedValue);
    });
    it('should get near proximity', function () {
        var wrap = wrapper();
        var testValue = { near: true };
        var expectedValue = 'near';
        wrap.instance().getProximity(testValue);
        expect(wrap.state().proximity).toEqual(expectedValue);
    });
    it('should get far proximity', function () {
        var wrap = wrapper();
        var testValue = { near: false };
        var expectedValue = 'far';
        wrap.instance().getProximity(testValue);
        expect(wrap.state().proximity).toEqual(expectedValue);
    });
});
//# sourceMappingURL=Proximity-test.js.map