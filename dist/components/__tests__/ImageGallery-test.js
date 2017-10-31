"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the ImageGallery component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var ImageGallery_1 = require("../PWAFeatures/Features/ImageGallery");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var props = {
    images: []
};
var multipleImages = {
    images: ['#', '#']
};
/*
  ShallowRender.dive() will return <ImageGallery /> component
 */
var wrapper = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(ImageGallery_1.default, __assign({}, props)))).dive(); };
var withImages = function () { return enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(ImageGallery_1.default, __assign({}, multipleImages)))).dive(); };
// tests
describe('<ImageGallery />', function () {
    it('should have a <GridList />', function () {
        expect(wrapper().find('GridList').length).toEqual(1);
    });
    it('should have 2 column width', function () {
        expect(wrapper().find('GridList').prop('cols')).toEqual(2);
    });
    it('should have a <GridTile /> for each image in props', function () {
        // no images should have no grid tiles
        expect(wrapper().find('GridTile').length).toEqual(0);
        // two images should have two grid tiles
        expect(withImages().find('GridTile').length).toEqual(2);
    });
    it('should show an <img /> for each image in props', function () {
        expect(wrapper().find('img').length).toEqual(0);
        expect(withImages().find('img').length).toEqual(2);
    });
});
//# sourceMappingURL=ImageGallery-test.js.map