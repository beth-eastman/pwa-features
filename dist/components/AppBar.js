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
 * @file AppBar.tsx
 * File in charge of Displaying app bar. The app bar contains a left icon, image,
 * and title.
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
var AppBar_1 = require("material-ui/AppBar");
var commonStyles_1 = require("./commonStyles");
var appIcon = require("../res/images/ui/app_icon_48.png");
var getTitleIcon = function (title) {
    return React.createElement("div", null,
        React.createElement("div", { style: { position: 'relative', top: 4 } },
            React.createElement("img", { style: { width: 40, display: 'block', float: 'left', position: 'relative', top: 6 }, src: appIcon }),
            React.createElement("div", { style: { position: 'relative', top: -5, left: 5 } }, title)));
};
var AppBar = (function (_super) {
    __extends(AppBar, _super);
    function AppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppBar.prototype.render = function () {
        var _a = this.props, title = _a.title, leftIcon = _a.leftIcon, onTitleClick = _a.onTitleClick, rightIcon = _a.rightIcon;
        return React.createElement(AppBar_1.default, { style: { backgroundColor: '#212121' }, titleStyle: commonStyles_1.appBarTitleStyle, iconStyleLeft: commonStyles_1.appBarIconeStyle, title: getTitleIcon(title), onTitleTouchTap: onTitleClick, iconElementLeft: leftIcon, iconElementRight: rightIcon });
    };
    return AppBar;
}(React.Component));
exports.default = AppBar;
//# sourceMappingURL=AppBar.js.map