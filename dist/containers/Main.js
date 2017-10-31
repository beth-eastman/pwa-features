"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Main.tsx
 * Container for the AppPageInterface component.
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
var react_redux_1 = require("react-redux");
var Main_1 = require("../components/Main");
var react_router_dom_1 = require("react-router-dom");
var actions_1 = require("../actions");
var stateToProps = function (state, ownProps) {
    return {
        version: ownProps.version,
        title: ownProps.defaultTitle
    };
};
var dispatchToProps = function (dispatch, ownProps) {
    return {
        setPageTitle: function (title) {
            dispatch(actions_1.setPageTitle(title));
        },
        sendMessage: function (message) {
            dispatch(actions_1.sendMessage(message));
        }
    };
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(stateToProps, dispatchToProps)(Main_1.default));
//# sourceMappingURL=Main.js.map