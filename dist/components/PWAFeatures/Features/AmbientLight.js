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
var AmbientLight = (function (_super) {
    __extends(AmbientLight, _super);
    function AmbientLight(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            type: null
        };
        _this.getAmbient = _this.getAmbient.bind(_this);
        return _this;
    }
    AmbientLight.prototype.componentWillMount = function () {
        window.addEventListener('devicelight', this.getAmbient);
    };
    AmbientLight.prototype.componentWillDismount = function () {
        window.removeEventListener('devicelight', this.getAmbient);
    };
    AmbientLight.prototype.getAmbient = function (event) {
        console.log(event);
        if (event.value < 50) {
            this.setState({
                type: 'darklight'
            });
        }
        else {
            this.setState({
                type: 'brightlight'
            });
        }
    };
    AmbientLight.prototype.render = function () {
        return (React.createElement("div", null,
            "Light Type:",
            this.state.type ?
                this.state.type : 'Unknown'));
    };
    return AmbientLight;
}(React.Component));
exports.default = AmbientLight;
//# sourceMappingURL=AmbientLight.js.map