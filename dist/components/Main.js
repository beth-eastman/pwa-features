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
 * @file Main.tsx
 * Contains the AppPageInterface, an interface that can be passed onto components
 * or containers in order to access common properties or functions such as
 * the router or screen information.
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
var loadMainAppBar = require('bundle-loader?lazy!./MainAppBar');
var loadMainTabs = require('bundle-loader?lazy!./MainTabs');
var Bundle_1 = require("./Bundle");
var LeftMenuIcon_1 = require("./LeftMenuIcon");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSetTabs = function (tempTabs) {
            // console.log(tempTabs);
            _this.setState({
                tempTabs: tempTabs
            });
        };
        _this.handleTabAdded = function () {
            _this.setState({
                tabCount: _this.state.tabCount + 1
            });
        };
        _this.handleTabRemoved = function () {
            if (_this.state.tabCount) {
                _this.setState({
                    tabCount: _this.state.tabCount - 1
                });
            }
        };
        _this.handleDefaultTabs = function (mainTabs) {
            // console.log(mainTabs);
            _this.setState({
                mainTabs: mainTabs
            });
        };
        _this.handleSelectTab = function (tabsId, tabId) {
            _this.setState({
                tabsId: tabsId,
                tabId: tabId
            });
        };
        _this.handleSetMainIcon = function (leftIcon) {
            _this.setState({ leftIcon: leftIcon });
        };
        _this.handleSetRightIcon = function (rightIcon) {
            _this.setState({ rightIcon: rightIcon });
        };
        _this.handleSetTitlePath = function (titlePath) {
            _this.setState({ titlePath: titlePath });
        };
        _this.getScreenDimensions = function () {
            var orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                orientation: orientation
            };
        };
        _this.handleTitleClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var history = _this.props.history;
            history.push(_this.state.titlePath);
        };
        _this.hasScreenChanged = function () {
            var _a = _this.state.screen, width = _a.width, height = _a.height;
            var currentDims = _this.getScreenDimensions();
            if (width !== currentDims.width) {
                return true;
            }
            if (height !== currentDims.height) {
                return true;
            }
            return false;
        };
        _this.handlePageResize = function () {
            var resizeTimeoutId = null;
            window.onresize = function () {
                if (resizeTimeoutId) {
                    clearTimeout(resizeTimeoutId);
                }
                if (_this.hasScreenChanged()) {
                    resizeTimeoutId = setTimeout(function () {
                        _this.setState({
                            screen: _this.getScreenDimensions()
                        });
                    }, 500);
                }
            };
        };
        _this.getAppPageObject = function () {
            var _a = _this.props, setPageTitle = _a.setPageTitle, history = _a.history;
            return {
                screen: _this.state.screen,
                setMainIcon: _this.handleSetMainIcon,
                setPageTitle: setPageTitle,
                history: history,
                setTitlePath: _this.handleSetTitlePath,
                version: _this.props.version,
                setRightIcon: _this.handleSetRightIcon,
                selectTab: _this.handleSelectTab,
                appType: _this.props.appType,
                setTabs: _this.handleSetTabs,
                setDefaultTabs: _this.handleDefaultTabs,
                sendMessage: _this.props.sendMessage,
                tabAdded: _this.handleTabAdded,
                tabRemoved: _this.handleTabRemoved,
                tabCount: _this.state.tabCount
            };
        };
        _this.state = {
            screen: _this.getScreenDimensions(),
            title: props.title,
            leftIcon: _this.props.leftIcon,
            titlePath: '/',
            rightIcon: _this.props.rightIcon,
            tabsId: null,
            tabId: 0,
            mainTabs: [],
            tempTabs: undefined,
            tabCount: 0
        };
        return _this;
    }
    Main.prototype.componentDidMount = function () {
        this.handlePageResize();
    };
    Main.prototype.render = function () {
        var _this = this;
        var loadComponent = this.props.appType === 'tabs' ? loadMainTabs : loadMainAppBar;
        //async loading
        return React.createElement(Bundle_1.default, { load: loadComponent }, function (LayoutComp) {
            return React.createElement(LayoutComp, __assign({ appPage: _this.getAppPageObject() }, _this.state, { onTitleClick: _this.handleTitleClick }));
        });
    };
    Main.defaultProps = {
        leftIcon: React.createElement(LeftMenuIcon_1.default, null),
        // leftIcon: null,
        rightIcon: null
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=Main.js.map