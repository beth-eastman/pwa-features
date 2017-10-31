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
 * @file FeatureCard.tsx
 * Card with Feature capability information for a device. Displays whether
 * a feature is enabled, feature details, as well as the ability
 * to test the function if it is enabled on the device.
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
// material-ui
var Card_1 = require("material-ui/Card");
var Divider_1 = require("material-ui/Divider");
var FlatButton_1 = require("material-ui/FlatButton");
var done_1 = require("material-ui/svg-icons/action/done");
var highlight_off_1 = require("material-ui/svg-icons/action/highlight-off");
var Dialog_1 = require("material-ui/Dialog");
var Check = (React.createElement(done_1.default, { style: { color: 'green' } }));
var None = (React.createElement(highlight_off_1.default, { style: { color: 'darkred' } }));
var FeatureCard = (function (_super) {
    __extends(FeatureCard, _super);
    function FeatureCard(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function () {
            _this.setState({ open: true });
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        _this.state = {
            open: false,
        };
        return _this;
    }
    // TODO: fix expandable function conditionally on feature enabled
    FeatureCard.prototype.render = function () {
        var actions = [
            React.createElement(FlatButton_1.default, { label: "Close", primary: true, onClick: this.handleClose }),
        ];
        return (React.createElement(Card_1.Card, { style: { margin: 20 } },
            React.createElement(Card_1.CardHeader, { style: {
                    backgroundColor: this.props.feature.featureEnabled ? 'lightgreen' : 'lightcoral'
                }, title: this.props.feature.featureName, subtitle: this.props.feature.featureEnabled ? 'Supported' : 'Not Supported', avatar: this.props.feature.featureEnabled ? Check : None, actAsExpander: true, showExpandableButton: this.props.feature.featureEnabled }),
            React.createElement(Card_1.CardText, { expandable: true }, this.props.feature.featureDetails),
            React.createElement(Divider_1.default, null),
            React.createElement(Card_1.CardActions, { expandable: true },
                React.createElement(FlatButton_1.default, { style: { margin: 10 }, label: "Test " + this.props.feature.featureName, disabled: !this.props.feature.featureEnabled, onTouchTap: this.handleOpen })),
            React.createElement(Dialog_1.default, { title: "Test " + this.props.feature.featureName, actions: actions, modal: false, open: this.state.open, autoScrollBodyContent: true, onRequestClose: this.handleClose }, this.props.feature.component)));
    };
    return FeatureCard;
}(React.Component));
exports.default = FeatureCard;
//# sourceMappingURL=FeatureCard.js.map