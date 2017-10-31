"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file _helper.tsx
 * Helper functions for math functions and sorting algorithms.
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
exports.getDistanceFromLatLonInMiles = function (lat1, lon1, lat2, lon2) {
    //var R = 6371; // Radius of the earth in km
    var R = 3959; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
};
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
/**
 * you must install cordova-plugin-inappbrowser for this to work in cordova apps
 *
 * @return ref
 */
exports.externalLink = function (absolutePath, target) {
    if (target === void 0) { target = '_system'; }
    return function () {
        if (typeof window.cordova === 'undefined' || typeof window.cordova.InAppBrowser === 'undefined') {
            return window.open(absolutePath, target);
        }
        return window.cordova.InAppBrowser.open(absolutePath, target, 'location=no');
    };
};
exports.isProductFavorite = function (ob, ids) {
    return ids.indexOf(ob.id) > -1;
};
exports.calcDistance = function (hospital, refLatitue, refLongitude) {
    var dist = exports.getDistanceFromLatLonInMiles(hospital.latitude, hospital.longitude, refLatitue, refLongitude);
    hospital.distance = Math.round(dist * 100) / 100;
    return hospital;
};
exports.distanceCompare = function (hospitalA, hospitalB) {
    if (hospitalA.distance < hospitalB.distance) {
        return -1;
    }
    if (hospitalA.distance > hospitalB.distance) {
        return 1;
    }
    return 0;
};
exports.distanceSort = function (direction) {
    if (direction === void 0) { direction = 'asc'; }
    return function (hospitalA, hospitalB) {
        if (hospitalA.distance < hospitalB.distance) {
            return direction === 'asc' ? -1 : 1;
        }
        if (hospitalA.distance > hospitalB.distance) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    };
};
exports.alphaSort = function (propName, direction) {
    if (direction === void 0) { direction = 'asc'; }
    return function (itemA, itemB) {
        if (itemA[propName] < itemB[propName]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (itemA[propName] > itemB[propName]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    };
};
exports.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
//# sourceMappingURL=_helper.js.map