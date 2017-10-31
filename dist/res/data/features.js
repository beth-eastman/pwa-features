"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Features.tsx
 * Features available to browsers, does browser chack and creates lists
 * of each feature, it's availabilty, and it's test component location
 * to be used by components.
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
var Bluetooth_1 = require("../../components/PWAFeatures/Features/Bluetooth");
var Camera_1 = require("../../components/PWAFeatures/Features/Camera");
var Microphone_1 = require("../../components/PWAFeatures/Features/Microphone");
var Geolocation_1 = require("../../components/PWAFeatures/Features/Geolocation");
var Vibration_1 = require("../../components/PWAFeatures/Features/Vibration");
var PushNotifications_1 = require("../../containers/PWAFeatures/PushNotifications");
var FileAccess_1 = require("../../components/PWAFeatures/Features/FileAccess");
var Battery_1 = require("../../components/PWAFeatures/Features/Battery");
var Orientation_1 = require("../../components/PWAFeatures/Features/Orientation");
var Motions_1 = require("../../components/PWAFeatures/Features/Motions");
var AmbientLight_1 = require("../../components/PWAFeatures/Features/AmbientLight");
var Proximity_1 = require("../../components/PWAFeatures/Features/Proximity");
var n = navigator;
var w = window;
/* check all features for availability */
var cameraCapable = !!(n.getUserMedia || n.webkitGetUserMedia ||
    n.mozGetUserMedia || n.msGetUserMedia);
var microphoneCapable = !!(n.getUserMedia || n.webkitGetUserMedia ||
    n.mozGetUserMedia || n.msGetUserMedia);
var blueToothCapable = 'bluetooth' in navigator;
var pushNotificationsCapable = 'serviceWorker' in navigator;
var vibrationCapable = navigator.vibrate ? true : false;
// const proximityCapable = false;
var deviceOrientation = 'DeviceOrientationEvent' in window;
var batteryStatusCapable = ('getBattery' in navigator ||
    ('battery' in navigator && 'Promise' in window)) !== false;
var geolocation = navigator.geolocation ? true : false;
var fileAccessCapable = w.File !== undefined;
// const vrCapable = false;
var threeDMotionCapable = 'Accelerometer' in window || 'Gyroscope' in window || 'DeviceMotionEvent' in window;
var ambientLightEnabled = 'ondevicelight' in window;
var proximityCapable = 'ondeviceproximity' in window || 'onuserproximity' in window;
var features = [
    {
        id: 0,
        featureName: 'Camera',
        featureDetails: 'Access Camera for Photo and Video',
        featureEnabled: cameraCapable,
        component: React.createElement(Camera_1.default, null),
    },
    {
        id: 1,
        featureName: 'Microphone',
        featureDetails: 'Use Device Microphone',
        featureEnabled: microphoneCapable,
        component: React.createElement(Microphone_1.default, null),
    },
    {
        id: 2,
        featureName: 'Bluetooth',
        featureDetails: 'Use Bluetooth Low Energy connected to Device. (Chrome Support Only)',
        featureEnabled: blueToothCapable,
        component: React.createElement(Bluetooth_1.default, null),
    },
    {
        id: 3,
        featureName: 'Push Notification',
        featureDetails: 'Get Push Notificatons',
        featureEnabled: pushNotificationsCapable,
        component: React.createElement(PushNotifications_1.default, null),
    },
    {
        id: 4,
        featureName: 'Battery',
        featureDetails: 'Device Battery Stats',
        featureEnabled: batteryStatusCapable,
        component: React.createElement(Battery_1.default, null),
    },
    {
        id: 5,
        featureName: '3D Motions',
        featureDetails: 'Get 3D Motions Data',
        featureEnabled: threeDMotionCapable,
        component: React.createElement(Motions_1.default, null),
    },
    {
        id: 6,
        featureName: 'Vibration',
        featureDetails: 'Device vibration',
        featureEnabled: vibrationCapable,
        component: React.createElement(Vibration_1.default, null),
    },
    {
        id: 7,
        featureName: 'Orientation',
        featureDetails: 'Device orientation',
        featureEnabled: deviceOrientation,
        component: React.createElement(Orientation_1.default, null),
    },
    {
        id: 8,
        featureName: 'Geolocation',
        featureDetails: 'Get device location',
        featureEnabled: geolocation,
        component: React.createElement(Geolocation_1.default, null),
    },
    {
        id: 9,
        featureName: 'File Access',
        featureDetails: 'Access the device local files',
        featureEnabled: fileAccessCapable,
        component: React.createElement(FileAccess_1.default, null),
    },
    {
        id: 10,
        featureName: 'Ambient Light',
        featureDetails: 'Get Light Info (Only available on Firefox on android)',
        featureEnabled: ambientLightEnabled,
        component: React.createElement(AmbientLight_1.default, null),
    },
    {
        id: 11,
        featureName: 'Proximity',
        featureDetails: 'Get Proximity information',
        featureEnabled: proximityCapable,
        component: React.createElement(Proximity_1.default, null)
    }
];
exports.default = features;
//# sourceMappingURL=features.js.map