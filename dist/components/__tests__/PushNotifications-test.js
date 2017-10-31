"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the PushNotification component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var PushNotification_1 = require("../PWAFeatures/Features/PushNotification");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/*
  ShallowRender.dive() will return <PushNotification /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(PushNotification_1.default, { enable: jest.fn(), disable: jest.fn(), pushNotifications: false }))).dive(); };
// tests
describe('<PushNotification />', function () {
    it('should render an <FlatButton> tag', function () {
        expect(wrapper().find('FlatButton').length).toEqual(1);
    });
    it('should show enable push notification button', function () {
        expect(wrapper().find('FlatButton').props().label).toEqual("Send Push Notifications");
    });
});
//# sourceMappingURL=PushNotifications-test.js.map