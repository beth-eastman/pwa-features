"use strict";
/**
 * @file PushNotifications.tsx
 * Has button to send push notifications or stop push notification service.
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
var React = require("react");
// Components
var FlatButton_1 = require("material-ui/FlatButton");
var PushNotification = (function (_super) {
    __extends(PushNotification, _super);
    function PushNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO: add push service workers
    PushNotification.prototype.render = function () {
        var enabledButton = (React.createElement(FlatButton_1.default, { label: "Send Push Notifications", onTouchTap: this.props.enable }));
        var disabledButton = (React.createElement("div", null,
            "Push Notifications require server access",
            React.createElement("br", null),
            React.createElement(FlatButton_1.default, { label: "Remove Push Notification", onTouchTap: this.props.disable })));
        return (React.createElement("div", { style: { textAlign: 'center' } }, this.props.pushNotifications ?
            disabledButton :
            enabledButton));
    };
    return PushNotification;
}(React.Component));
exports.default = PushNotification;
//# sourceMappingURL=PushNotification.js.map