"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file reducers/index.ts
 * Reducer variables and functions.
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
var actions_1 = require("../actions");
var redux_1 = require("redux");
var defaultPushNotifications = {
    pushNotifications: false
};
var defaultUser = {
    platform: 'unknown'
};
var defaultSettings = {
    eulaAccepted: false
};
var defaultView = {
    screen: {
        width: 500,
        height: 500
    },
    page: {
        title: ''
    },
    flash: {
        message: '',
        open: false
    }
};
//Do not persist
var user = function (state, action) {
    if (state === void 0) { state = defaultUser; }
    switch (action.type) {
        case actions_1.SET_USER_PLATFORM:
            state = __assign({}, state, { platform: action.platform });
            break;
    }
    return state;
};
var settings = function (state, action) {
    if (state === void 0) { state = defaultSettings; }
    switch (action.type) {
        case actions_1.EULA_ACCEPTED:
            state = __assign({}, state, { eulaAccepted: true });
            break;
        case actions_1.EULA_REJECTED:
            state = __assign({}, state, { eulaAccepted: false });
            break;
    }
    return state;
};
var notifications = function (state, action) {
    if (state === void 0) { state = defaultPushNotifications; }
    switch (action.type) {
        case actions_1.PUSH_NOTIFICATIONS_ENABLED:
            state = __assign({}, state, { pushNotifications: true });
            break;
        case actions_1.PUSH_NOTIFICATIONS_DISABLED:
            state = __assign({}, state, { pushNotifications: false });
            break;
    }
    return state;
};
var view = function (state, action) {
    if (state === void 0) { state = defaultView; }
    switch (action.type) {
        case actions_1.SET_PAGE_TITLE:
            state = __assign({}, state, { page: __assign({}, state.page, { title: action.title }) });
            break;
        case actions_1.T2_APP_MESSAGE_START:
            state = __assign({}, state, { flash: { message: action.message, open: true } });
            break;
        case actions_1.T2_APP_MESSAGE_CLEAR:
            state = __assign({}, state, { flash: { message: '', open: false } });
            break;
    }
    return state;
};
var defaultReducers = {
    user: user,
    view: view,
    settings: settings,
    notifications: notifications
};
var reducer = redux_1.combineReducers(__assign({}, defaultReducers));
exports.default = reducer;
//# sourceMappingURL=index.js.map