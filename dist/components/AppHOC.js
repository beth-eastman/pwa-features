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
 * @file AppHOC.tsx
 * AppHOC represents higher order components mostly used to enforce props interface.
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
var Page_1 = require("./Page");
var BackButton_1 = require("./BackButton");
var withPropsComponent = function (WrappedComponent, props) {
    var componentProps = __assign({}, props, { tab: undefined, tabIndex: undefined });
    return React.createElement(WrappedComponent, __assign({}, componentProps));
};
exports.routePageWithProps = function (WrappedComponent, props) {
    return function (routeProps) {
        var tab = typeof props.tab !== 'undefined' ? props.tab : props.tabIndex;
        var combinedProps = __assign({}, props, { tab: tab });
        return React.createElement(Page_1.default, __assign({}, combinedProps), withPropsComponent(WrappedComponent, __assign({}, props, routeProps)));
    };
};
exports.routeComponentWithProps = function (WrappedComponent, props) {
    return function (routeProps) {
        return withPropsComponent(WrappedComponent, __assign({}, props, routeProps));
    };
};
exports.menuItem = function (WrappedComponent, basePath) {
    if (basePath === void 0) { basePath = '/'; }
    return withPropsComponent(WrappedComponent, { basePath: basePath });
};
exports.backIcon = function (path) {
    if (path === void 0) { path = '/'; }
    return React.createElement(BackButton_1.default, { path: path });
};
exports.leftIconProps = function (path) {
    return {
        leftIcon: exports.backIcon(path),
        titlePath: path
    };
};
//# sourceMappingURL=AppHOC.js.map