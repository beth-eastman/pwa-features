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
 * @file Geolocation.tsx
 * Gets the geolocation from the browser and displays that latitude
 * and longitude of the devices current location.
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
var CircularProgress_1 = require("material-ui/CircularProgress");
var my_location_1 = require("material-ui/svg-icons/maps/my-location");
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            latitude: null,
            longitude: null,
            progress: false,
            errorMessage: null,
        };
        _this.getGeolocation = _this.getGeolocation.bind(_this);
        _this.showError = _this.showError.bind(_this);
        return _this;
    }
    /* Get latitude and longitude */
    Geolocation.prototype.getGeolocation = function () {
        var that = this;
        // start the circular progress bar
        this.setState({
            progress: true,
        });
        // get the geolocation data & remove circular progress
        navigator.geolocation.getCurrentPosition(function (position) {
            that.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                progress: false,
                errorMessage: null,
            });
        }, this.showError);
    };
    /* Show error if geolocation fails */
    Geolocation.prototype.showError = function (error) {
        var errorMessage;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                errorMessage = "An unknown error occurred.";
                break;
        }
        this.setState({
            progress: null,
            errorMessage: errorMessage,
        });
    };
    /* render geolocation card */
    Geolocation.prototype.render = function () {
        return (React.createElement("div", { style: { padding: 10, textAlign: 'center' } },
            React.createElement(my_location_1.default, null),
            React.createElement("br", null),
            this.state.progress &&
                React.createElement("div", { className: "progress", style: { padding: 10 } },
                    React.createElement(CircularProgress_1.default, null),
                    React.createElement("br", null)),
            this.state.errorMessage &&
                React.createElement("div", { className: "errorMessage" },
                    "Error: ",
                    this.state.errorMessage),
            this.state.latitude &&
                React.createElement("div", { className: "latLong" },
                    "Latitude: ",
                    this.state.latitude,
                    React.createElement("br", null),
                    "Longitude: ",
                    this.state.longitude),
            React.createElement(FlatButton_1.default, { label: "Get geolocation", onTouchTap: this.getGeolocation })));
    };
    return Geolocation;
}(React.Component));
exports.default = Geolocation;
//# sourceMappingURL=Geolocation.js.map