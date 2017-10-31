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
 * @file BrowserInfoDashBoard.tsx
 * Displays basic information about the browser such as browser platform,
 * version, etc.
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
var Card_1 = require("material-ui/Card");
var BrowserInfoDashBoard = (function (_super) {
    __extends(BrowserInfoDashBoard, _super);
    function BrowserInfoDashBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserInfoDashBoard.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Card_1.Card, { style: { margin: 20 } },
                React.createElement(Card_1.CardText, null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "Browser Dashboard"))),
            React.createElement(Card_1.Card, { style: { margin: 20 } },
                React.createElement(Card_1.CardText, null,
                    "Browser Engine Name: ",
                    navigator.product,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser Platform: ",
                    navigator.platform,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser App Code Name: ",
                    navigator.appCodeName,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser App Name: ",
                    navigator.appName,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser Version: ",
                    navigator.appVersion,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser Language: ",
                    navigator.language,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser Online: ",
                    navigator.onLine + '',
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browser Vendor: ",
                    navigator.vendor,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Browsers Open Location: ",
                    window.location.href,
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null)))));
    };
    return BrowserInfoDashBoard;
}(React.Component));
exports.default = BrowserInfoDashBoard;
//# sourceMappingURL=BrowserInfoDashBoard.js.map