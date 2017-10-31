"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file actions/index.ts
 * Contains actions constants and functions.
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
exports.SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
exports.SET_USER_PLATFORM = 'T2.SET_USER_PLATFORM';
exports.T2_APP_MESSAGE_START = 'T2.APP_MESSAGE_START';
exports.T2_APP_MESSAGE_CLEAR = 'T2.APP_MESSAGE_CLEAR';
exports.EULA_ACCEPTED = 'T2.EULA_ACCEPTED';
exports.EULA_REJECTED = 'T2.EULA_REJECTED';
// testing actions
exports.PUSH_NOTIFICATIONS_DISABLED = 'T2.PUSH_NOTIFICATIONS_DISABLED';
exports.PUSH_NOTIFICATIONS_ENABLED = 'T2.PUSH_NOTIFICATIONS_ENABLED';
exports.SORT_ALPHABETICAL = 'default';
exports.SORT_DEFAULT = 'default';
exports.SORT_LOCATION = 'current_location';
exports.sorts = {
    SORT_ALPHABETICAL: exports.SORT_ALPHABETICAL,
    SORT_DEFAULT: exports.SORT_DEFAULT,
    SORT_LOCATION: exports.SORT_LOCATION
};
exports.pushNotificationsEnabled = function () {
    return {
        type: exports.PUSH_NOTIFICATIONS_ENABLED
    };
};
exports.pushNotificationsDisabled = function () {
    return {
        type: exports.PUSH_NOTIFICATIONS_DISABLED
    };
};
exports.eulaAccepted = function () {
    return {
        type: exports.EULA_ACCEPTED
    };
};
exports.eulaRejected = function () {
    var localAction = {
        type: exports.EULA_REJECTED
    };
    return function (dispatch, getState, extraArgs) {
        dispatch(localAction);
        if (extraArgs.platform.toLowerCase() === 'android') {
            window.navigator.app.exitApp();
        }
    };
};
exports.setUserPlatform = function (platform) {
    return {
        type: exports.SET_USER_PLATFORM,
        platform: platform
    };
};
exports.setPageTitle = function (title) {
    return {
        type: exports.SET_PAGE_TITLE,
        title: title
    };
};
exports.messageStart = function (message) {
    return {
        type: exports.T2_APP_MESSAGE_START,
        message: message
    };
};
exports.messageClear = function () {
    return {
        type: exports.T2_APP_MESSAGE_CLEAR
    };
};
var timeOutId = null;
exports.sendMessage = function (message) {
    return function (dispatch, getState, extraArgs) {
        console.log(extraArgs);
        dispatch(exports.messageStart(message));
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(function () { dispatch(exports.messageClear()); }, 3000);
    };
};
//# sourceMappingURL=index.js.map