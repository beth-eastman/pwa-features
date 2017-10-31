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
 * @file Battery.tsx
 * Access the devices battery information from the browser Battery API
 * Note: this feature is no longer has support and can be removed at any time
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
var battery_charging_full_1 = require("material-ui/svg-icons/device/battery-charging-full");
var Battery = (function (_super) {
    __extends(Battery, _super);
    function Battery(props) {
        var _this = _super.call(this, props) || this;
        _this.getBatteryStatus = function () {
            var that = _this;
            var n = navigator;
            return n.getBattery().then(function (battery) {
                that.setState({
                    batteryCharging: battery.charging,
                    batteryLevel: battery.level * 100,
                    batteryChargingTime: battery.chargingTime,
                    batteryDischargingTime: battery.dischargingTime,
                });
            });
        };
        _this.state = {
            batteryCharging: null,
            batteryLevel: null,
            batteryChargingTime: null,
            batteryDischargingTime: null,
        };
        return _this;
    }
    Battery.prototype.render = function () {
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(battery_charging_full_1.default, null),
            React.createElement("br", null),
            this.state.batteryCharging !== null &&
                React.createElement("div", { className: "battery" },
                    "Battery Charging: ",
                    this.state.batteryCharging + '',
                    React.createElement("br", null),
                    "Battery Level: ",
                    this.state.batteryLevel,
                    "%",
                    React.createElement("br", null),
                    "Battery Charging Time: ",
                    this.state.batteryChargingTime,
                    React.createElement("br", null),
                    "Battery Discharging Time: ",
                    this.state.batteryDischargingTime,
                    React.createElement("br", null)),
            React.createElement(FlatButton_1.default, { label: "Battery Status", onTouchTap: this.getBatteryStatus })));
    };
    return Battery;
}(React.Component));
exports.default = Battery;
//# sourceMappingURL=Battery.js.map