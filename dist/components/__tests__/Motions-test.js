"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Motions component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Motions_1 = require("../PWAFeatures/Features/Motions");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// TODO: mock window objects and functions
var mockWindow = {
    Accelerometer: null,
    Gyroscope: null,
    DeviceMotionEvent: null,
};
// const g = global as any;
var g = global;
g.window = mockWindow;
// set up component
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Motions_1.default, null))).dive(); };
// tests
describe('<Motions />', function () {
    it('should have default initial state', function () {
        var wrap = wrapper();
        expect(wrap.state().open).toEqual(false);
        expect(wrap.state().accelerationNoGravity).toEqual(null);
        expect(wrap.state().accelerationWithGravity).toEqual(null);
        expect(wrap.state().rotation).toEqual(null);
        expect(wrap.state().interval).toEqual(null);
    });
    it('Get motion data should getMotions()', function () {
        var wrap = wrapper();
        expect(wrap.state().open).toEqual(false);
        wrap.find('FlatButton').simulate('touchTap');
        expect(wrap.state().open).toEqual(true);
    });
    it('getRotation() should set values correctly', function () {
        var wrap = wrapper();
        var badValues = { alpha: null, beta: null, gamma: null };
        var goodValues = { alpha: 0, beta: 1, gamma: 2 };
        wrap.instance().getRotation(goodValues);
        expect(wrap.state().rotation).toEqual([0, 1, 2]);
        // should not set state for null values
        wrap.instance().getRotation(badValues);
        expect(wrap.state().rotation).toEqual([0, 1, 2]);
    });
    it('getIntervalRate() should set state.interval to value passed in', function () {
        var wrap = wrapper();
        wrap.instance().getIntervalRate(2);
        expect(wrap.state().interval).toEqual(2);
    });
    it('getAcceleration() with "withoutgravity" arg should set state', function () {
        var wrap = wrapper();
        var acceleration = { x: 1, y: 2, z: 3 };
        var nullAccceleration = { x: null, y: null, z: null };
        // expect values to be set in state
        wrap.instance().getAcceleration(acceleration, 'withoutgravity');
        expect(wrap.state().accelerationNoGravity).toEqual([1, 2, 3]);
        // expect null values wont be set in state
        wrap.instance().getAcceleration(nullAccceleration, 'withoutgravity');
        expect(wrap.state().accelerationNoGravity).toEqual([1, 2, 3]);
    });
    it('getAcceleration() without "withoutgravity" arg should set state', function () {
        var wrap = wrapper();
        var acceleration = { x: 1, y: 2, z: 3 };
        wrap.instance().getAcceleration(acceleration);
        expect(wrap.state().accelerationWithGravity).toEqual([1, 2, 3]);
    });
});
//# sourceMappingURL=Motions-test.js.map