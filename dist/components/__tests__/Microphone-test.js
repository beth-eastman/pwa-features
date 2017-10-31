"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the Microphone component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var Microphone_1 = require("../PWAFeatures/Features/Microphone");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var g = global;
g.navigator.getUserMedia = jest.fn().mockReturnValue('stream');
/*
  ShallowRender.dive() will return <Microphone /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(Microphone_1.default, null))).dive(); };
// tests
describe('<Microphone />', function () {
    it('initial open state should be false', function () {
        expect(wrapper().state('open')).toBe(false);
    });
    xit('getUserMedia() should get correct userMedia object for browser', function () {
        // const wrap = wrapper();
    });
    xit('getStream() should create stream', function () {
        var wrap = wrapper();
        wrap.instance().getStream();
        expect(wrap.state().localMediaStream).not.toBeNull();
    });
});
//# sourceMappingURL=Microphone-test.js.map