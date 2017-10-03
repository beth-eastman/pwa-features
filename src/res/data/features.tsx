import * as React from 'react';
import Bluetooth from '../../components/PWAFeatures/Bluetooth';
import Camera from '../../components/PWAFeatures/Camera';
import Microphone from '../../components/PWAFeatures/Microphone';
// import Geolocation from '../../components/PWAFeatures/Geolocation';

const n = navigator as any;
const w = window as any;

/* check all features for availability */
const cameraCapable = (n.getUserMedia || n.webkitGetUserMedia ||
  n.mozGetUserMedia || n.msGetUserMedia) !== false;
const michrophoneCapable = (n.getUserMedia || n.webkitGetUserMedia ||
  n.mozGetUserMedia || n.msGetUserMedia) !== false;
const blueToothCapable = 'bluetooth' in navigator;
const pushNotificationsCapable = 'serviceWorker' in navigator;
const vibrationCapable = navigator.vibrate ? true : false;
const proximityCapable = false;
const batteryStatusCapable = ('getBattery' in navigator ||
      ('battery' in navigator && 'Promise' in window)) !== false;
const geolocation = navigator.geolocation ? true : false;
const fileAccessCapable = w.File !== undefined;
const vrCapable = false;

/*
// Use the device camera
const getCamera = () => {
  console.log('testing camera');
};

// Use the device vibration
const deviceVibrate = () => {
  console.log('test device vibration');
  navigator.vibrate(1);
};

// Use the devices microphone
const useMicrophone = () => {
  console.log('use and record microphone')
};

// Connect to bluetooth low energy devices
const useBluetooth = () => {
  console.log('use and connect to blueetooth');
};

// Use service worker push function
const sendPushNotification = () => {
  console.log('send push notification to device');
}
*/

const features = [
  {
    featureName: 'Camera',
    featureDetails: 'Access Camera for Photo and Video',
    featureEnabled: cameraCapable,
    component: (<Camera />),
  },
  {
    featureName: 'Microphone',
    featureDetails: 'Use Device Microphone',
    featureEnabled: michrophoneCapable,
    component: (<Microphone />),
  },
  {
    featureName: 'Bluetooth',
    featureDetails: 'Use Bluetooth Low Energy connected to Device',
    featureEnabled: blueToothCapable,
    component: (<Bluetooth />),
  },
  {
    featureName: 'Push Notification',
    featureDetails: 'Get Push Notificatons',
    featureEnabled: pushNotificationsCapable,
    component: null,
  },
  {
    featureName: 'Proximity',
    featureDetails: 'Get Proximity of Device',
    featureEnabled: proximityCapable,
    component: null,
  },
  {
    featureName: 'Battery',
    featureDetails: 'Device Battery Stats',
    featureEnabled: batteryStatusCapable,
    component: null,
  },
  {
    featureName: 'Vibration',
    featureDetails: 'Device vibration',
    featureEnabled: vibrationCapable,
    component: null,
  },
  {
    featureName: 'Orientation',
    featureDetails: 'Device orientation',
    featureEnabled: false,
    component: null,
  },
  {
    featureName: 'Device Motions',
    featureDetails: 'Device 3D motions',
    featureEnabled: false,
    component: null,
  },
  {
    featureName: 'Geolocation',
    featureDetails: 'Get device location',
    featureEnabled: geolocation,
    component: null,
  },
  {
    featureName: 'File Access',
    featureDetails: 'Access the device local files',
    featureEnabled: fileAccessCapable,
    component: null,
  },
  {
    featureName: 'Virtual Reality',
    featureDetails: 'Use Virtual Reality Device',
    featureEnabled: vrCapable,
    component: null,
  },
]

export default features;
