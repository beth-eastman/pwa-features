"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Geolocation component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Geolocation_1 = require("../PWAFeatures/Features/Geolocation");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// simulated error codes
var err1 = { code: 1, PERMISSION_DENIED: 1 };
var err2 = { code: 2, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2 };
var err3 = { code: 3, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 };
var err4 = { code: 4, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3, UNKNOWN_ERROR: 4 };
// mock global navigator geolocation objects
var mockGeolocation = {
    getCurrentPosition: function (callback, error) { return callback({ coords: { latitude: 100, longitude: 100 } }); },
    watchPosition: jest.fn()
};
var mockGeolocationFail = {
    getCurrentPosition: function (callback, error) { return error(err1); },
    watchPosition: jest.fn()
};
var g = global;
g.navigator.geolocation = mockGeolocation;
// set up component
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Geolocation_1.default, null))).dive(); };
// tests
describe('<Geolocation />', function () {
    it('should have initial state values', function () {
        var wrap = wrapper();
        expect(wrap.state().latitude).toEqual(null);
        expect(wrap.state().longitude).toEqual(null);
        expect(wrap.state().progress).toEqual(false);
        expect(wrap.state().errorMessage).toEqual(null);
    });
    it('should not show any data before <FlatButton /> is clicked', function () {
        var wrap = wrapper();
        expect(wrap.find('.progress').length).toEqual(0);
        expect(wrap.find('.errorMessage').length).toEqual(0);
        expect(wrap.find('.latLong').length).toEqual(0);
    });
    it('showError() show permission denied error', function () {
        var wrap = wrapper();
        wrap.instance().showError(err1);
        expect(wrap.state().errorMessage).toEqual("User denied the request for Geolocation.");
        expect(wrap.find('.errorMessage').length).toEqual(1);
    });
    it('showError() show position unavailable error', function () {
        var wrap = wrapper();
        wrap.instance().showError(err2);
        expect(wrap.state().errorMessage).toEqual("Location information is unavailable.");
    });
    it('showError() show timeout error', function () {
        var wrap = wrapper();
        wrap.instance().showError(err3);
        expect(wrap.state().errorMessage).toEqual("The request to get user location timed out.");
    });
    it('showError() show unknown error', function () {
        var wrap = wrapper();
        wrap.instance().showError(err4);
        expect(wrap.state().errorMessage).toEqual("An unknown error occurred.");
    });
    it('getGeolocation() should set correct latitude and longitude values', function () {
        var wrap = wrapper();
        wrap.instance().getGeolocation();
        // Calling getGeolocation() should set state to (Latitude: 100, Longitude: 100)
        expect(wrap.state().latitude).toEqual(100);
        expect(wrap.state().longitude).toEqual(100);
    });
    it('Pushing <FlatButton /> should show latitude and longitude', function () {
        var wrap = wrapper();
        // simulate user pressing get geolocation button
        wrap.find('FlatButton').simulate('touchTap');
        // state values should be set to the mockGeolocation
        // (latitude: 100, longitude: 100)
        expect(wrap.state().latitude).toEqual(100);
        expect(wrap.state().longitude).toEqual(100);
    });
    it('Pushing <FlatButton /> with error shows error message', function () {
        g.navigator.geolocation = mockGeolocationFail; // geolocation request will fail
        var wrap = wrapper();
        expect(wrap.state().errorMessage).toEqual(null);
        // simulate user pressing get geolocation button
        wrap.find('FlatButton').simulate('touchTap');
        // expect geolocation request to fail
        expect(wrap.state().errorMessage).toEqual("User denied the request for Geolocation.");
        // return geolocation to default value
        g.navigator.geolocation = mockGeolocation;
    });
});
//# sourceMappingURL=Geolocation-test.js.map