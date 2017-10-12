import * as React from 'react';
import Bluetooth from '../../components/PWAFeatures/Features/Bluetooth';
import Camera from '../../components/PWAFeatures/Features/Camera';
import Microphone from '../../components/PWAFeatures/Features/Microphone';
import Geolocation from '../../components/PWAFeatures/Features/Geolocation';
import Vibration from '../../components/PWAFeatures/Features/Vibration';
import PushNotification from '../../components/PWAFeatures/Features/PushNotification';
import FileAccess from '../../components/PWAFeatures/Features/FileAccess';
import Battery from '../../components/PWAFeatures/Features/Battery';
import Orientation from '../../components/PWAFeatures/Features/Orientation';
import Motions from '../../components/PWAFeatures/Features/Motions';

const n = navigator as any;
const w = window as any;

/* check all features for availability */
const cameraCapable = !!(n.getUserMediad || n.webkitGetUserMedia ||
  n.mozGetUserMedia || n.msGetUserMedia);
const microphoneCapable = !!(n.getUserMedia || n.webkitGetUserMedia ||
  n.mozGetUserMedia || n.msGetUserMedia);
const blueToothCapable = 'bluetooth' in navigator;
const pushNotificationsCapable = 'serviceWorker' in navigator;
const vibrationCapable = navigator.vibrate ? true : false;
const proximityCapable = false;
const deviceOrientation = 'DeviceOrientationEvent' in window;
const batteryStatusCapable = ('getBattery' in navigator ||
      ('battery' in navigator && 'Promise' in window)) !== false;
const geolocation = navigator.geolocation ? true : false;
const fileAccessCapable = w.File !== undefined;
const vrCapable = false;
const threeDMotionCapable = 'Accelerometer' in window || 'Gyroscope' in window || 'DeviceMotionEvent' in window;

export interface FeatureInterface {
  id: number,
  featureName: string,
  featureDetails: string,
  featureEnabled: boolean,
  component: JSX.Element,
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
    featureName: 'Proximity',
    featureDetails: 'Get Proximity of Device',
    featureEnabled: proximityCapable,
    component: null,
  },
  {
    id: 11,
    featureName: 'Virtual Reality',
    featureDetails: 'Use Virtual Reality Device',
    featureEnabled: vrCapable,
    component: null,
  },
]

export default features;
