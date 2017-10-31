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
 * @file RouteGroup.tsx
 * Route group sets the tabs for the application based on the current
 * group of routes.
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
var RouteGroup = (function (_super) {
    __extends(RouteGroup, _super);
    function RouteGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTabActive = function (path) {
            var _a = _this.props, appPage = _a.appPage, onActive = _a.onActive;
            return function (tab) {
                appPage.history.push(path);
                onActive && onActive(tab, path);
            };
        };
        _this.handleCreateTabs = function () {
            var appPage = _this.props.appPage;
            var tabs = [];
            _this.props.children
                .filter(function (child) { return typeof child.props['tab'] !== 'undefined'; })
                .map(function (child, idx) {
                tabs.push(React.createElement(Tabs_1.Tab, { style: { backgroundColor: '#212121' }, onActive: _this.handleTabActive(child.props.path), label: child.props.title, value: idx }));
            });
            appPage.setDefaultTabs(tabs);
            appPage.tabAdded();
        };
        return _this;
    }
    RouteGroup.prototype.componentWillMount = function () {
        this.handleCreateTabs();
    };
    RouteGroup.prototype.componentWillUnmount = function () {
        var appPage = this.props.appPage;
        appPage.setDefaultTabs([]);
        appPage.tabRemoved();
    };
    RouteGroup.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextProps.appPage.tabCount < this.props.appPage.tabCount) {
            this.handleCreateTabs();
        }
    };
    RouteGroup.prototype.render = function () {
        var _this = this;
        var appPage = this.props.appPage;
        var childrenWithProps = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, __assign({}, _this.props.defaultProps, child.props, { appPage: appPage }));
        });
        return React.createElement("div", null, childrenWithProps);
    };
    return RouteGroup;
}(React.Component));
exports.default = RouteGroup;
//# sourceMappingURL=RouteGroup.js.map