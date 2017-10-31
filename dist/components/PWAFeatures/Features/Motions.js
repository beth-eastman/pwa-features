"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* 3D motions using device's accelerometer and gyroscope */
var React = require("react");
// Components
var FlatButton_1 = require("material-ui/FlatButton");
// Icons
var screen_rotation_1 = require("material-ui/svg-icons/device/screen-rotation");
var Accelerometer = null;
var AccelerometerGravity = null;
var Gyroscope = null;
var Motions = (function (_super) {
    __extends(Motions, _super);
    function Motions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: false,
            accelerationNoGravity: null,
            accelerationWithGravity: null,
            rotation: null,
            interval: null,
        };
        var w = window;
        if ('Accelerometer' in window && 'Gyroscope' in window) {
            Accelerometer = new w.Accelerometer();
            AccelerometerGravity = new w.Accelerometer({ includeGravity: true });
            Gyroscope = new w.Gyroscope;
        }
        // bind functions to component
        _this.getAcceleration = _this.getAcceleration.bind(_this);
        _this.getRotation = _this.getRotation.bind(_this);
        _this.getIntervalRate = _this.getIntervalRate.bind(_this);
        _this.getMotions = _this.getMotions.bind(_this);
        // functions to be shared between addEventListener & removeEventListener
        _this.accelerationEventHandler = _this.accelerationEventHandler.bind(_this);
        _this.accelerationGravityEventHandler = _this.accelerationGravityEventHandler.bind(_this);
        _this.rotationEventHandler = _this.rotationEventHandler.bind(_this);
        _this.deviceMotionEventHandler = _this.deviceMotionEventHandler.bind(_this);
        return _this;
    }
    /* Get accelerometer x, y, and z coordinates */
    Motions.prototype.getAcceleration = function (acceleration, type) {
        var x = acceleration.x && acceleration.x.toFixed(3) / 1;
        var y = acceleration.y && acceleration.y.toFixed(3) / 1;
        var z = acceleration.z && acceleration.z.toFixed(3) / 1;
        if (x || y || z) {
            if (type === 'withoutgravity') {
                this.setState({
                    accelerationNoGravity: [x, y, z]
                });
            }
            else {
                this.setState({
                    accelerationWithGravity: [x, y, z]
                });
            }
        }
    };
    /*
     * Sets the rate (alpha, beta, gamma) at which the device is rotating
     * around each of its axes in degrees per second.
     * alpha: rate at which the device is rotating about its Z axis;
     * beta: rate at which the device is rotating about its X axis; front to back.
     * gamma: rate at which the device is rotating about its Y axis; side to side.
     */
    Motions.prototype.getRotation = function (rotation) {
        var alpha = rotation.alpha && rotation.alpha.toFixed(3) / 1;
        var beta = rotation.beta && rotation.beta.toFixed(3) / 1;
        var gamma = rotation.gamma && rotation.gamma.toFixed(3) / 1;
        // TODO: FIX keeps getting called after component dismounts
        if (alpha || beta || gamma) {
            this.setState({
                rotation: [alpha, beta, gamma],
            });
        }
    };
    /*
     * Sets the interval, in milliseconds, at which data is obtained from the device.
     * Intervals are used to determine the granularity of motion events.
     */
    Motions.prototype.getIntervalRate = function (interval) {
        this.setState({
            interval: interval,
        });
    };
    Motions.prototype.accelerationEventHandler = function () {
        this.getAcceleration(Accelerometer, 'withoutgravity');
    };
    Motions.prototype.accelerationGravityEventHandler = function () {
        this.getAcceleration(AccelerometerGravity, 'withgravity');
    };
    Motions.prototype.rotationEventHandler = function () {
        this.getRotation({
            alpha: Gyroscope.x,
            beta: Gyroscope.y,
            gamma: Gyroscope.z
        });
    };
    Motions.prototype.deviceMotionEventHandler = function (event) {
        this.getAcceleration(event.acceleration, 'withoutgravity');
        this.getAcceleration(event.accelerationIncludingGravity, 'withgravity');
        this.getRotation(event.rotationRate);
        this.getIntervalRate(event.interval);
    };
    /* Set up event listeners for device motions when component mounts */
    Motions.prototype.getMotions = function () {
        if ('Accelerometer' in window && 'Gyroscope' in window) {
            // start accelerometer
            Accelerometer.addEventListener('reading', this.accelerationEventHandler);
            Accelerometer.start();
            // start accelerometer with gravity
            AccelerometerGravity.addEventListener('reading', this.accelerationGravityEventHandler);
            AccelerometerGravity.start();
            // start gyroscope
            Gyroscope.addEventListener('reading', this.rotationEventHandler);
            Gyroscope.start();
        }
        else if ('DeviceMotionEvent' in window) {
            window.addEventListener('devicemotion', this.deviceMotionEventHandler, false);
        }
        if (!this.state.open) {
            this.setState({
                open: true,
            });
        }
    };
    /* Remove event listeners when component will dismount */
    Motions.prototype.componentWillUnmount = function () {
        if ('Accelerometer' in window && 'Gyroscope' in window) {
            // stop Accelerometer
            Accelerometer.removeEventListener('reading', this.accelerationEventHandler);
            Accelerometer.stop();
            // stop Accelerometer with gravity
            AccelerometerGravity.removeEventListener('reading', this.accelerationGravityEventHandler);
            AccelerometerGravity.stop();
            // stop Gyroscope
            Gyroscope.removeEventListener('reading', this.rotationEventHandler);
            Gyroscope.stop();
        }
        else if ('DeviceMotionEvent' in window) {
            window.removeEventListener('devicemotion', this.deviceMotionEventHandler, false);
        }
    };
    // TODO: fix setSate being called after the component dismounts
    Motions.prototype.render = function () {
        var notAvailable = 'Not Available';
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(screen_rotation_1.default, null),
            React.createElement("br", null),
            this.state.open &&
                React.createElement("div", null,
                    React.createElement("b", null, "Acceleration (No Gravity):"),
                    React.createElement("br", null),
                    this.state.accelerationNoGravity ?
                        this.state.accelerationNoGravity.toString() :
                        notAvailable,
                    React.createElement("br", null),
                    React.createElement("b", null, "Acceleration (W/ Gravity):"),
                    React.createElement("br", null),
                    this.state.accelerationWithGravity ?
                        this.state.accelerationWithGravity.toString() :
                        notAvailable,
                    React.createElement("br", null),
                    React.createElement("b", null, "Rotation:"),
                    React.createElement("br", null),
                    this.state.rotation ?
                        this.state.rotation.toString() :
                        notAvailable,
                    React.createElement("br", null),
                    React.createElement("b", null, "Interval:"),
                    React.createElement("br", null),
                    this.state.interval ?
                        this.state.interval :
                        notAvailable),
            React.createElement("br", null),
            React.createElement(FlatButton_1.default, { label: "Get Motion Data", onTouchTap: this.getMotions })));
    };
    return Motions;
}(React.Component));
exports.default = Motions;
//# sourceMappingURL=Motions.js.map