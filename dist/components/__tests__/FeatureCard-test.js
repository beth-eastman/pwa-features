"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testing the FeatureCard component
 */
var React = require("react");
var enzyme_1 = require("enzyme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var FeatureCard_1 = require("../PWAFeatures/FeatureCard");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var featureComponent = (React.createElement("h1", null, "Fancy Feature Component"));
// A test example of 'enabled' feature (feature available to use in browser)
var enabledFeatureProps = {
    id: 0,
    featureName: 'SomeFancyEnabledFeatureName',
    featureDetails: 'Some Details about an enabled component',
    featureEnabled: false,
    component: featureComponent,
};
// A test example of 'disabled' feature  (feature not available in browser)
var disabledFeatureProps = {
    id: 0,
    featureName: 'SomeFancyDisabledFeatureNAme',
    featureDetails: 'Some Details about a disabled component',
    featureEnabled: true,
    component: featureComponent,
};
/*
  Shallow renders an enabled <FeatureCard />
 */
var enabledWrapper = enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(FeatureCard_1.default, { feature: enabledFeatureProps }))).dive();
/*
  Shallow renders a disabled <FeatureCard />
 */
var disabledWrapper = enzyme_1.shallow(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement(FeatureCard_1.default, { feature: disabledFeatureProps }))).dive();
describe('<FeatureCard />', function () {
    it('should have default closed <Dialog />', function () {
        expect(enabledWrapper.state().open).toEqual(false);
        expect(disabledWrapper.state().open).toEqual(false);
    });
    it('should render a <Card> tag', function () {
        expect(enabledWrapper.find('Card').length).toEqual(1);
    });
    it('should have a red <CardHeader /> for enabled features', function () {
        expect(enabledWrapper.find('CardHeader').prop('style').backgroundColor).toEqual('lightcoral');
    });
    it('should have a green <CardHeader /> for disabled features', function () {
        expect(disabledWrapper.find('CardHeader').prop('style').backgroundColor).toEqual('lightgreen');
    });
});
//# sourceMappingURL=FeatureCard-test.js.map