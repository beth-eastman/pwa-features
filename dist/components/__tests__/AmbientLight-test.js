"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var AmbientLight_1 = require("../PWAFeatures/Features/AmbientLight");
// mock global event
var event = { value: 0 };
window.ondevicelight = jest.fn().mockReturnValue(event);
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(AmbientLight_1.default, null))).dive(); };
describe('<AmbientLight />', function () {
    it('should return dark light for small values', function () {
        var wrap = wrapper();
        // getAmbient() with small value should have dark light
        wrap.instance().getAmbient({ value: 2 });
        expect(wrap.state().type).toEqual('darklight');
    });
    it('should return bright light for large values', function () {
        var wrap = wrapper();
        // getAmbient() with large value should have bright light
        wrap.instance().getAmbient({ value: 392 });
        console.log(wrap.state().type);
        expect(wrap.state().type).toEqual('brightlight');
    });
});
//# sourceMappingURL=AmbientLight-test.js.map