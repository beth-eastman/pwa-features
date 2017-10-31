"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Bluetooth component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Bluetooth_1 = require("../PWAFeatures/Features/Bluetooth");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// mock global navigator Bluetooth objects
var mockBluetooth = {
    requestDevice: jest.fn(),
};
var g = global;
g.navigator.bluetooth = mockBluetooth;
/*
  ShallowRender.dive() will return <Bluetooth /> component
 */
var wrapper = enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Bluetooth_1.default, null))).dive();
// tests
describe('<Bluetooth />', function () {
    it('should render an <FlatButton> tag', function () {
        expect(wrapper.find('FlatButton').length).toEqual(1);
    });
    it('should have null initial state values', function () {
        expect(wrapper.state().batteryPercentage).toEqual(null);
        // inital bluetooth capable value is true since navigator.bluetooth defined
        expect(wrapper.state().bluetoothCapable).toEqual(true);
        expect(wrapper.state().bluetoothConnected).toEqual(false);
        expect(wrapper.state().errorMessage).toEqual(null);
    });
    it('should not show battery percentage on load', function () {
        expect(wrapper.find('.batteryPercentage').length).toEqual(0);
    });
    it('should not show error message on load', function () {
        expect(wrapper.find('.errorMessage').length).toEqual(0);
    });
    xit('should show error message thrown from failed requestDevice() request', function () {
        // wrapper.find('FlatButton').props().onTouchTap();
        var errorMessage = 'Something broke';
        var expectedError = new Error(errorMessage);
        mockBluetooth.requestDevice.mockImplementationOnce(function () { return Promise.reject(expectedError); });
        wrapper.find('FlatButton').simulate('touchTap');
        // console.log(wrapper.state());
        expect(wrapper.state().errorMessage).toEqual(errorMessage);
    });
    xit('should show battery percentage on successful requestDevice() request', function () {
        var bluetoothDevice = {
            name: 'Test Device',
            paired: false,
            batteryPercentage: 50
        };
        mockBluetooth.requestDevice.mockImplementationOnce(function () { return Promise.resolve(bluetoothDevice); });
        wrapper.find('FlatButton').simulate('touchTap');
        expect(wrapper.state().batteryPercentage).toEqual(50);
    });
});
//# sourceMappingURL=Bluetooth-test.js.map