"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file LeftMenuIcon.tsx
 * The LeftMenuIcon is an icon that opens an menu.
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
var IconMenu_1 = require("material-ui/IconMenu");
var MenuItem_1 = require("material-ui/MenuItem");
var IconButton_1 = require("material-ui/IconButton");
var menu_1 = require("material-ui/svg-icons/navigation/menu");
var react_router_dom_1 = require("react-router-dom");
var LeftMenu = function () {
    return (React.createElement(IconMenu_1.default, { iconButtonElement: React.createElement(IconButton_1.default, null,
            React.createElement(menu_1.default, { color: 'white' })), anchorOrigin: { horizontal: 'left', vertical: 'top' }, targetOrigin: { horizontal: 'left', vertical: 'top' } },
        React.createElement(MenuItem_1.default, { containerElement: React.createElement(react_router_dom_1.Link, { to: "/" }), primaryText: "Home" })));
};
exports.default = LeftMenu;
//# sourceMappingURL=LeftMenuIcon.js.map