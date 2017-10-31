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
var Proximity = (function (_super) {
    __extends(Proximity, _super);
    function Proximity(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            distance: null,
            proximity: null
        };
        _this.getDistance = _this.getDistance.bind(_this);
        _this.getProximity = _this.getProximity.bind(_this);
        return _this;
    }
    Proximity.prototype.componentWillMount = function () {
        window.addEventListener('deviceproximity', this.getDistance);
        window.addEventListener('userproximity', this.getProximity);
    };
    Proximity.prototype.componentWillDismount = function () {
        window.removeEventListener('deviceproximity', this.getDistance);
        window.removeEventListener('userproximity', this.getProximity);
    };
    Proximity.prototype.getDistance = function (event) {
        this.setState({
            distance: event.value.toFixed(0) + ' cm ('
                + event.min.toFixed(0) + '-' + event.max.toFixed(0) + ' cm range)',
        });
    };
    Proximity.prototype.getProximity = function (event) {
        this.setState({
            proximity: event.near ? 'near' : 'far'
        });
    };
    Proximity.prototype.render = function () {
        return (React.createElement("div", null,
            "Distance: ",
            this.state.distance ? this.state.distance : 'Unknown',
            React.createElement("br", null),
            "Proximity: ",
            this.state.proximity ? this.state.proximity : 'Unknown'));
    };
    return Proximity;
}(React.Component));
exports.default = Proximity;
//# sourceMappingURL=Proximity.js.map