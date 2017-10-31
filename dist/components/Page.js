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
 * @file Page.tsx
 * Wrapper that passes functionality down to a component.
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
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.componentWillMount = function () {
        var _a = this.props, appPage = _a.appPage, leftIcon = _a.leftIcon, titlePath = _a.titlePath, title = _a.title, rightIcon = _a.rightIcon, tab = _a.tab;
        appPage.setRightIcon(rightIcon);
        appPage.setMainIcon(leftIcon);
        if (typeof tab !== 'undefined') {
            appPage.selectTab('someId', tab);
        }
        if (titlePath) {
            appPage.setTitlePath(titlePath);
        }
        if (title) {
            appPage.setPageTitle(title);
        }
    };
    Page.prototype.componentWillUnmount = function () {
        var appPage = this.props.appPage;
        appPage.setTabs(undefined);
    };
    Page.prototype.render = function () {
        return React.createElement("div", null, this.props.children);
    };
    Page.defaultProps = {
        title: '',
        titlePath: '',
        leftIcon: null,
        rightIcon: null,
        tabs: undefined,
        defaultTabs: []
    };
    return Page;
}(React.Component));
exports.default = Page;
//# sourceMappingURL=Page.js.map