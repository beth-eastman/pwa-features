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
var React = require("react");
// Components
var FlatButton_1 = require("material-ui/FlatButton");
var keyboard_voice_1 = require("material-ui/svg-icons/hardware/keyboard-voice");
var Microphone = (function (_super) {
    __extends(Microphone, _super);
    function Microphone(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            microphoneOpen: false,
            localMediaStream: null,
            open: false,
            recordings: [],
        };
        _this.testMicrophone = _this.testMicrophone.bind(_this);
        _this.stopMicrophone = _this.stopMicrophone.bind(_this);
        _this.recordMicrophone = _this.recordMicrophone.bind(_this);
        _this.getUserMedia = _this.getUserMedia.bind(_this);
        _this.getStream = _this.getStream.bind(_this);
        _this.stopStream = _this.stopStream.bind(_this);
        return _this;
    }
    /* test the camera */
    Microphone.prototype.testMicrophone = function () {
        console.log('test microphone');
    };
    /* stop current video stream */
    Microphone.prototype.stopMicrophone = function () {
        console.log('stop microphone');
    };
    ;
    /* Microphone */
    Microphone.prototype.recordMicrophone = function () {
        console.log('mircrophonerecording');
    };
    ;
    Microphone.prototype.getUserMedia = function (options, successCallback, failureCallback) {
        var n = navigator;
        var api = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        if (api) {
            return api.bind(n)(options, successCallback, failureCallback);
        }
        console.log('User Media API not supported.');
    };
    Microphone.prototype.getStream = function () {
        var n = navigator;
        var w = window;
        var constraints = {};
        constraints['audio'] = true;
        // var that = this;
        this.getUserMedia(constraints, function (stream) {
            var mediaControl = document.querySelector('audio');
            console.log('getusermedia');
            // this.setState({
            //   localMediaStream: stream,
            // });
            if (n.mozGetUserMedia) {
                mediaControl.mozSrcObject = stream;
            }
            else {
                mediaControl.srcObject = stream;
                mediaControl.src = (w.URL || w.webkitURL).createObjectURL(stream);
            }
        }, function (err) {
            console.log('Error: ' + err);
        });
    };
    Microphone.prototype.stopStream = function () {
        var n = navigator;
        var mediaControl = document.querySelector('audio');
        if (n.mozGetUserMedia) {
            mediaControl.mozSrcObject = null;
        }
        else {
            mediaControl.srcObject = null;
            mediaControl.src = null;
        }
    };
    /* render the camera canvas */
    Microphone.prototype.render = function () {
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(keyboard_voice_1.default, null),
            React.createElement("br", null),
            React.createElement("input", { type: "file", accept: "audio/*;capture=microphone" }),
            React.createElement("br", null),
            React.createElement(FlatButton_1.default, { label: "Record", onTouchTap: this.getStream }),
            React.createElement(FlatButton_1.default, { label: "Stop Recording", onTouchTap: this.stopStream }),
            React.createElement("audio", { controls: true })));
    };
    return Microphone;
}(React.Component));
exports.default = Microphone;
//# sourceMappingURL=Microphone.js.map