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
 * @file Bluetooth.tsx
 * Accesses Low Energy Bluetooth devices and gets the battery percentage.
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
var FlatButton_1 = require("material-ui/FlatButton");
var bluetooth_1 = require("material-ui/svg-icons/device/bluetooth");
var Bluetooth = (function (_super) {
    __extends(Bluetooth, _super);
    function Bluetooth(props) {
        var _this = _super.call(this, props) || this;
        /* Connect to bluetooth low energy */
        _this.connect = function () {
            var that = _this;
            var n = navigator;
            // TODO: fix some provided filters
            var options = {
                filters: [
                    { services: ['battery_service'] }
                ],
            };
            n.bluetooth.requestDevice(options).then(function (device) {
                return device.gatt.connect();
            })
                .then(function (server) {
                return server.getPrimaryService('battery_service');
            })
                .then(function (service) {
                return service.getCharacteristic('battery_level');
            })
                .then(function (characteristic) {
                return characteristic.readValue();
            })
                .then(function (value) {
                that.setState({
                    batteryPercentage: value.getUint8(0),
                });
            })
                .catch(function (error) {
                that.setState({
                    errorMessage: error.toString(),
                });
            });
        };
        _this.state = {
            batteryPercentage: null,
            bluetoothCapable: false,
            bluetoothConnected: false,
            errorMessage: null,
        };
        return _this;
    }
    /* Check if bluetooth is available */
    Bluetooth.prototype.componentWillMount = function () {
        if ('bluetooth' in navigator) {
            this.setState({
                bluetoothCapable: true,
            });
        }
    };
    /* render the camera canvas */
    Bluetooth.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(bluetooth_1.default, null),
            React.createElement("br", null),
            this.state.batteryPercentage &&
                React.createElement("div", { className: "batteryPercentage" },
                    "Device Battery Percentage is: ",
                    React.createElement("br", null),
                    this.state.batteryPercentage,
                    React.createElement("br", null)),
            this.state.errorMessage &&
                React.createElement("div", { className: "errorMessage" }, this.state.errorMessage),
            React.createElement(FlatButton_1.default, { label: "Connect", disabled: !this.state.bluetoothCapable, onTouchTap: function () { _this.connect(); } })));
    };
    return Bluetooth;
}(React.Component));
exports.default = Bluetooth;
//# sourceMappingURL=Bluetooth.js.map