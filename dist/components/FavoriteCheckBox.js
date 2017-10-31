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
 * @file FavoriteCheckBox.tsx
 * This file represents a favorite icon that can be toggled.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
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
var star_1 = require("material-ui/svg-icons/toggle/star");
var star_border_1 = require("material-ui/svg-icons/toggle/star-border");
var IconButton_1 = require("material-ui/IconButton");
var FavoriteCheckbox = (function (_super) {
    __extends(FavoriteCheckbox, _super);
    function FavoriteCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleToggle = function (event) {
            var toggleFavorite = _this.props.toggleFavorite;
            toggleFavorite(event);
        };
        return _this;
    }
    FavoriteCheckbox.prototype.render = function () {
        var checked = this.props.checked;
        var icon = checked ? React.createElement(star_1.default, { color: "yellow" }) : React.createElement(star_border_1.default, { color: "white" });
        return React.createElement(IconButton_1.default, { onTouchTap: this.handleToggle }, icon);
    };
    FavoriteCheckbox.defaultProps = {
        checked: false
    };
    return FavoriteCheckbox;
}(React.Component));
exports.default = FavoriteCheckbox;
//# sourceMappingURL=FavoriteCheckBox.js.map