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
 * @file MainTabs.tsx
 * Renders the AppBar, Tabs, and Main content for the application.
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
var Tabs_1 = require("material-ui/Tabs");
var MainContent_1 = require("./MainContent");
var AppBar_1 = require("../containers/AppBar");
var MainTabs = (function (_super) {
    __extends(MainTabs, _super);
    function MainTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (value) {
            var appPage = _this.props.appPage;
            // console.log(value);
            appPage.selectTab(null, value);
        };
        _this.handleSwipeChange = function (v, v2) {
            // console.log(v,v2);
        };
        return _this;
    }
    MainTabs.prototype.render = function () {
        // console.log(this.props);
        var defaultProps = __assign({}, this.props, { basePath: '/', mainTabs: undefined });
        var tabs = typeof this.props.tempTabs !== 'undefined' ? this.props.tempTabs : this.props.mainTabs;
        return (React.createElement("div", null,
            React.createElement(AppBar_1.default, { rightIcon: this.props.rightIcon, defaultTitle: this.props.title, leftIcon: this.props.leftIcon, onTitleClick: this.props.onTitleClick }),
            React.createElement(Tabs_1.Tabs, { value: this.props.tabId, onChange: this.handleChange, children: tabs }),
            React.createElement(MainContent_1.default, __assign({}, defaultProps))));
    };
    return MainTabs;
}(React.Component));
exports.default = MainTabs;
//# sourceMappingURL=MainTabs.js.map