"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file ImageGallery.tsx
 * Displays a list of images.
 *
 * PWA Features
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
var React = require("react");
var GridList_1 = require("material-ui/GridList");
var IconButton_1 = require("material-ui/IconButton");
// Icons
var file_download_1 = require("material-ui/svg-icons/file/file-download");
var ImageGallery = (function (_super) {
    __extends(ImageGallery, _super);
    function ImageGallery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responsiveColumns = function () {
            // const width = this.props.appPage.screen.width;
            // if (!width) {
            //   return 1;
            // }
            // if (width > 1200) {
            //   return 4;
            // }
            // if (width > 900) {
            //   return 3;
            // }
            // if (width > 600) {
            //   return 2;
            // }
            return 2;
        };
        return _this;
    }
    ImageGallery.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Image Gallery"),
            React.createElement(GridList_1.GridList, { style: { width: '100%' }, cols: this.responsiveColumns() }, this.props.images.map(function (image, key) {
                return (React.createElement(GridList_1.GridTile, { key: key, title: 'download image', actionIcon: React.createElement("a", { href: image, download: "image-" + key + ".png" },
                        React.createElement(IconButton_1.default, null,
                            React.createElement(file_download_1.default, { color: "white" }))) },
                    React.createElement("img", { src: image, alt: "photo from device", key: key })));
            }))));
    };
    return ImageGallery;
}(React.Component));
exports.default = ImageGallery;
;
//# sourceMappingURL=ImageGallery.js.map