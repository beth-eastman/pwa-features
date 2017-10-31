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
 * @file Eula.tsx
 * File renders a EULA (End User Licensing Agreement) as a popup dialog.
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
var Dialog_1 = require("material-ui/Dialog");
var FlatButton_1 = require("material-ui/FlatButton");
var commonStyles_1 = require("./commonStyles");
var settings_1 = require("../res/data/settings");
var Eula = (function (_super) {
    __extends(Eula, _super);
    function Eula(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { suppressOpen: true };
        return _this;
    }
    Eula.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            _this.setState({ suppressOpen: false });
        }, 1000);
    };
    Eula.prototype.render = function () {
        var _a = this.props, accept = _a.accept, reject = _a.reject, eulaAccepted = _a.eulaAccepted, hideRejectButton = _a.hideRejectButton;
        var actions = [
            React.createElement(FlatButton_1.default, { label: "Accept", primary: true, onTouchTap: accept })
        ];
        if (!hideRejectButton) {
            actions.push(React.createElement(FlatButton_1.default, { label: "Reject", primary: true, onTouchTap: reject }));
        }
        return (React.createElement("div", null,
            React.createElement(Dialog_1.default, { title: "EULA", actions: actions, modal: false, open: !eulaAccepted && !this.state.suppressOpen, contentStyle: commonStyles_1.fullWidthDialagStyle, autoScrollBodyContent: true },
                React.createElement("h3", null, settings_1.eula.title),
                settings_1.eula.paragraphs.map(function (para, i) { return React.createElement("p", { key: i }, para); }))));
    };
    return Eula;
}(React.Component));
exports.default = Eula;
//# sourceMappingURL=Eula.js.map