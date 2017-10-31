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
 * @file DashBoard.tsx
 * Dashboard for PWA functionalities for device. Lists all of the available Features
 * and has a card to test the features of each.
 *
 * PWA Starter
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
var FeatureCard_1 = require("./FeatureCard");
var features_1 = require("../../res/data/features");
var DashBoard = (function (_super) {
    __extends(DashBoard, _super);
    function DashBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
        Show a list of features available.
     */
    DashBoard.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Card_1.Card, { style: { margin: 20 } },
                React.createElement(Card_1.CardText, null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "Feature Dashboard"))),
            features_1.default.map(function (feature) {
                return (React.createElement(FeatureCard_1.default, { key: feature.id, feature: feature }));
            })));
    };
    return DashBoard;
}(React.Component));
exports.default = DashBoard;
//# sourceMappingURL=DashBoard.js.map