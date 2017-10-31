"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the FileAccess component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var FileAccess_1 = require("../PWAFeatures/Features/FileAccess");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/*
  ShallowRender.dive() will return <FileAccess /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(FileAccess_1.default, null))).dive(); };
// tests
describe('<FileAccess />', function () {
    it('should have <input /> element for files', function () {
        expect(wrapper().find('input').length).toEqual(1);
    });
});
//# sourceMappingURL=FileAccess-test.js.map