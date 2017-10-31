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
 * @file Orientation.tsx
 * Uses the browsers 'deviceorientationevent' listener to get the current
 * orientation of the device in values of alpha, beta, and gamma.
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
// Components
var FlatButton_1 = require("material-ui/FlatButton");
// Icons
var screen_rotation_1 = require("material-ui/svg-icons/device/screen-rotation");
var Orientation = (function (_super) {
    __extends(Orientation, _super);
    function Orientation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            alpha: null,
            beta: null,
            gamma: null,
            open: false,
        };
        _this.orientation = _this.orientation.bind(_this);
        _this.getOrientation = _this.getOrientation.bind(_this);
        return _this;
    }
    /* Callback function for event listeners to get orientation */
    Orientation.prototype.orientation = function (event) {
        this.setState({
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma,
            open: true,
        });
    };
    /* add event listener for the device's orientation */
    Orientation.prototype.getOrientation = function () {
        window.addEventListener('deviceorientation', this.orientation);
    };
    /* When component unmounts, remove window event listener */
    Orientation.prototype.componentWillUnmount = function () {
        window.removeEventListener('deviceorientation', this.orientation);
    };
    Orientation.prototype.render = function () {
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(screen_rotation_1.default, null),
            React.createElement("br", null),
            this.state.open &&
                React.createElement("div", { className: "alpha-beta-gamma" },
                    "Alpha:",
                    React.createElement("br", null),
                    this.state.alpha ? this.state.alpha : 'Not Available',
                    React.createElement("br", null),
                    "Beta:",
                    React.createElement("br", null),
                    this.state.beta ? this.state.beta : 'Not Available',
                    React.createElement("br", null),
                    "Gamma:",
                    React.createElement("br", null),
                    this.state.gamma ? this.state.gamma : 'Not Available'),
            React.createElement(FlatButton_1.default, { label: "Get Orientation Info", onTouchTap: this.getOrientation })));
    };
    return Orientation;
}(React.Component));
exports.default = Orientation;
//# sourceMappingURL=Orientation.js.map