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
 * @file NavItem.tsx
 *
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
var LeftMenuIcon_1 = require("./LeftMenuIcon");
var react_router_dom_1 = require("react-router-dom");
var AppHOC_1 = require("./AppHOC");
var RouteItem = (function (_super) {
    __extends(RouteItem, _super);
    function RouteItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRouteComponent = function () {
            return AppHOC_1.routeComponentWithProps(_this.props.component, __assign({}, _this.getCleanProps(), { leftIcon: React.createElement(LeftMenuIcon_1.default, null), rightIcon: null }));
        };
        _this.handleRenderPage = function () {
            return AppHOC_1.routePageWithProps(_this.props.componentPage, _this.getCleanProps());
        };
        _this.getCleanProps = function () {
            var props = __assign({}, _this.props, { componentPage: undefined, component: undefined });
            return props;
        };
        return _this;
    }
    RouteItem.prototype.handleRender = function () {
        return this.props.componentPage ? this.handleRenderPage() : this.renderRouteComponent();
    };
    RouteItem.prototype.render = function () {
        return React.createElement(react_router_dom_1.Route, __assign({}, this.getCleanProps(), { render: this.handleRender() }));
    };
    RouteItem.defaultProps = {
        exact: false,
        tab: undefined,
        tabIndex: undefined
    };
    return RouteItem;
}(React.Component));
exports.default = RouteItem;
//# sourceMappingURL=RouteItem.js.map