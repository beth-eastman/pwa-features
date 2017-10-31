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
/**
 * @file Camera.tsx
 * Uses browser's camera to take photos, allows user to download
 * the photos
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
// Components
var Divider_1 = require("material-ui/Divider");
var FlatButton_1 = require("material-ui/FlatButton");
var ImageGallery_1 = require("./ImageGallery");
var Snackbar_1 = require("material-ui/Snackbar");
// Icons
var videocam_1 = require("material-ui/svg-icons/av/videocam");
var photo_camera_1 = require("material-ui/svg-icons/image/photo-camera");
var images = [];
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cameraOpen: false,
            localMediaStream: null,
            open: false,
            photos: [],
        };
        _this.testCamera = _this.testCamera.bind(_this);
        _this.stopCamera = _this.stopCamera.bind(_this);
        _this.takePhoto = _this.takePhoto.bind(_this);
        return _this;
    }
    /* test the camera */
    Camera.prototype.testCamera = function () {
        // Prefer camera resolution nearest to 1280x720.
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        var that = this;
        // get the camera source and play in video element
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            that.setState({ localMediaStream: mediaStream });
            video.onloadedmetadata = function (e) {
                video.play();
                that.setState({ cameraOpen: false });
            };
        })
            .catch(function (err) { console.log(err.name + ": " + err.message); });
    };
    /* stop current video stream */
    Camera.prototype.stopCamera = function () {
        if (this.state.localMediaStream) {
            var video = document.querySelector('video');
            var stream = video.srcObject;
            var tracks = stream.getTracks();
            // for each current track stop the video
            for (var _i = 0, tracks_1 = tracks; _i < tracks_1.length; _i++) {
                var track = tracks_1[_i];
                track.stop();
            }
            tracks = null;
            video.srcObject = null;
            this.setState({
                cameraOpen: false,
                localMediaStream: null
            });
        }
    };
    /* Take a Photo */
    Camera.prototype.takePhoto = function () {
        var videoObj = { video: true, audio: true };
        var that = this;
        if (navigator.getUserMedia && this.state.localMediaStream) {
            navigator.getUserMedia(videoObj, function (stream) {
                var video = document.getElementById("video");
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                context.drawImage(video, 0, 0, 500, 300);
                var data = canvas.toDataURL("image/png");
                images.push(data);
                that.setState({ photos: [] });
            }, function (error) {
                console.error("Video capture error: ", error);
            });
        }
        else {
            this.setState({ cameraOpen: false });
        }
    };
    ;
    /* render the camera canvas */
    Camera.prototype.render = function () {
        var camera = null;
        camera = (React.createElement("div", null,
            React.createElement("h2", null, "Camera "),
            React.createElement(FlatButton_1.default, { className: "openCameraButton", label: "Open Camera", onTouchTap: this.testCamera, icon: React.createElement(videocam_1.default, null) }),
            React.createElement(FlatButton_1.default, { className: "stopCameraButton", label: "Stop Camera", onTouchTap: this.stopCamera, icon: React.createElement(videocam_1.default, null) }),
            React.createElement(FlatButton_1.default, { className: "takePhotoButton", label: "Take a Photo", onTouchTap: this.takePhoto, icon: React.createElement(photo_camera_1.default, null) }),
            React.createElement("br", null),
            React.createElement("video", { id: "video", width: "500", height: "300" }),
            React.createElement("canvas", { hidden: true, id: "canvas", width: "500", height: "300" }),
            React.createElement("br", null)));
        return (React.createElement("div", { style: { textAlign: 'center' } },
            camera,
            React.createElement(Divider_1.default, null),
            React.createElement(ImageGallery_1.default, { images: images }),
            React.createElement(Snackbar_1.default, { message: "Please open the camera to take a photo", open: this.state.cameraOpen })));
    };
    return Camera;
}(React.Component));
exports.default = Camera;
//# sourceMappingURL=Camera.js.map