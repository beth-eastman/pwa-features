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
import * as React from 'react';
import Bluetooth from '../../components/PWAFeatures/Features/Bluetooth';
import Camera from '../../components/PWAFeatures/Features/Camera';
import Microphone from '../../components/PWAFeatures/Features/Microphone';
import Geolocation from '../../components/PWAFeatures/Features/Geolocation';
import Vibration from '../../components/PWAFeatures/Features/Vibration';
import PushNotification from '../../containers/PWAFeatures/PushNotifications';
import FileAccess from '../../components/PWAFeatures/Features/FileAccess';
import Battery from '../../components/PWAFeatures/Features/Battery';
import Orientation from '../../components/PWAFeatures/Features/Orientation';
import Motions from '../../components/PWAFeatures/Features/Motions';
import AmbientLight from '../../components/PWAFeatures/Features/AmbientLight';
import Proximity from '../../components/PWAFeatures/Features/Proximity';
import SpeechRecognition from '../../components/PWAFeatures/Features/SpeechRecognition';

const n = navigator as any;
const w = window as any;

/* check all features for availability */
const cameraCapable = !!(n.getUserMedia || n.webkitGetUserMedia ||
  n.mozGetUserMedia || n.msGetUserMedia);
const microphoneCapable = cameraCapable;
const blueToothCapable = 'bluetooth' in navigator;
const pushNotificationsCapable = 'serviceWorker' in navigator;
const vibrationCapable = navigator.vibrate ? true : false;
const deviceOrientation = 'DeviceOrientationEvent' in window;
const batteryStatusCapable = ('getBattery' in navigator ||
      ('battery' in navigator && 'Promise' in window)) !== false;
const geolocation = navigator.geolocation ? true : false;
const fileAccessCapable = w.File !== undefined;
const threeDMotionCapable = 'Accelerometer' in window || 'Gyroscope' in window || 'DeviceMotionEvent' in window;
const ambientLightEnabled = 'ondevicelight' in window;
const proximityCapable = 'ondeviceproximity' in window || 'onuserproximity' in window;
// const speechRecognitionEnabled = !!(w.SpeechRecognition || w.webKitSpeechRecognition);

console.log(w);

export interface FeatureInterface {
  id: number,
  featureName: string,
  featureDetails: string,
  featureEnabled: boolean,
  component: JSX.Element,   // the component associated with the feature
}

const features : FeatureInterface[] = [
  {
    id: 0,
    featureName: 'Camera',
    featureDetails: 'Access Camera for Photo and Video',
    featureEnabled: cameraCapable,
    component: <Camera />,
  },
  {
    id: 1,
    featureName: 'Microphone',
    featureDetails: 'Use Device Microphone',
    featureEnabled: microphoneCapable,
    component: <Microphone />,
  },
  {
    id: 2,
    featureName: 'Bluetooth',
    featureDetails: 'Use Bluetooth Low Energy connected to Device. (Chrome Support Only)',
    featureEnabled: blueToothCapable,
    component: <Bluetooth />,
  },
  {
    id: 3,
    featureName: 'Push Notification',
    featureDetails: 'Get Push Notificatons',
    featureEnabled: pushNotificationsCapable,
    component: <PushNotification />,
  },
  {
    id: 4,
    featureName: 'Battery',
    featureDetails: 'Device Battery Stats',
    featureEnabled: batteryStatusCapable,
    component: <Battery />,
  },
  {
    id: 5,
    featureName: '3D Motions',
    featureDetails: 'Get 3D Motions Data',
    featureEnabled: threeDMotionCapable,
    component: <Motions />,
  },
  {
    id: 6,
    featureName: 'Vibration',
    featureDetails: 'Device vibration',
    featureEnabled: vibrationCapable,
    component: <Vibration />,
  },
  {
    id: 7,
    featureName: 'Orientation',
    featureDetails: 'Device orientation',
    featureEnabled: deviceOrientation,
    component: <Orientation />,
  },
  {
    id: 8,
    featureName: 'Geolocation',
    featureDetails: 'Get device location',
    featureEnabled: geolocation,
    component: <Geolocation />,
  },
  {
    id: 9,
    featureName: 'File Access',
    featureDetails: 'Access the device local files',
    featureEnabled: fileAccessCapable,
    component: <FileAccess />,
  },
  {
    id: 10,
    featureName: 'Ambient Light',
    featureDetails: 'Get Light Info (Only available on Firefox on android)', // TODO: fix feature enabled only to be true on firefox mobile
    featureEnabled: ambientLightEnabled,
    component: <AmbientLight />,
  },
  {
    id: 11,
    featureName: 'Proximity',
    featureDetails: 'Get Proximity information',
    featureEnabled: proximityCapable,
    component: <Proximity />,
  },
  {
    id: 12,
    featureName: 'Speech Recognition',
    featureDetails: 'Use Web Speech Recognition',
    featureEnabled: true,
    component: <SpeechRecognition />,
  }
]

export default features;
