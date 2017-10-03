// import * as React from 'react';
// import Bluetooth from './components/Bluetooth';
// import Camera from './components/Camera';
// import Microphone from './components/Microphone';
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

/* Use the device camera */
const getCamera = () => {
  console.log('testing camera');
};

/* Use the device vibration */
const deviceVibrate = () => {
  console.log('test device vibration');
  navigator.vibrate(1);
};

/* Use the devices microphone */
const useMicrophone = () => {
  console.log('use and record microphone')
};

/* Connect to bluetooth low energy devices */
const useBluetooth = () => {
  console.log('use and connect to blueetooth');
};

/* Use service worker push function */
const sendPushNotification = () => {
  console.log('send push notification to device');
}


const features = [
  {
    featureName: 'Camera',
    featureDetails: 'Access Camera for Photo and Video',
    featureEnabled: cameraCapable,
    testFeatureFunction: () => {getCamera()},
  },
  {
    featureName: 'Microphone',
    featureDetails: 'Use Device Microphone',
    featureEnabled: michrophoneCapable,
    testFeatureFunction: () => {useMicrophone()}
  },
  {
    featureName: 'Bluetooth',
    featureDetails: 'Use Bluetooth Low Energy connected to Device',
    featureEnabled: blueToothCapable,
    testFeatureFunction: () => {useBluetooth()}
  },
  {
    featureName: 'Push Notification',
    featureDetails: 'Get Push Notificatons',
    featureEnabled: pushNotificationsCapable,
    testFeatureFunction: () => {sendPushNotification()}
  },
  {
    featureName: 'Proximity',
    featureDetails: 'Get Proximity of Device',
    featureEnabled: proximityCapable,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'Battery',
    featureDetails: 'Device Battery Stats',
    featureEnabled: batteryStatusCapable,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'Vibration',
    featureDetails: 'Device vibration',
    featureEnabled: vibrationCapable,
    testFeatureFunction: () => {deviceVibrate()}
  },
  {
    featureName: 'Orientation',
    featureDetails: 'Device orientation',
    featureEnabled: false,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'Device Motions',
    featureDetails: 'Device 3D motions',
    featureEnabled: false,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'Geolocation',
    featureDetails: 'Get device location',
    featureEnabled: geolocation,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'File Access',
    featureDetails: 'Access the device local files',
    featureEnabled: fileAccessCapable,
    testFeatureFunction: () => {console.log('TODO')}
  },
  {
    featureName: 'Virtual Reality',
    featureDetails: 'Use Virtual Reality Device',
    featureEnabled: vrCapable,
    testFeatureFunction: () => {console.log('TODO')}
  },
]

export default features;
