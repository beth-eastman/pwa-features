/**
 * Testing the FeatureCard component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FeatureCard from '../PWAFeatures/FeatureCard';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { FeatureInterface } from '../../res/data/features';

injectTapEventPlugin();

const featureComponent = (<h1>Fancy Feature Component</h1>);

const enabledFeatureProps : FeatureInterface = {
  id: 0,
  featureName: 'SomeFancyEnabledFeatureName',
  featureDetails: 'Some Details about an enabled component',
  featureEnabled: false,
  component: featureComponent,
};

const disabledFeatureProps : FeatureInterface = {
  id: 0,
  featureName: 'SomeFancyDisabledFeatureNAme',
  featureDetails: 'Some Details about a disabled component',
  featureEnabled: true,
  component: featureComponent,
};

// a FeatureCard component for an enabled feature
const enabledWrapper = shallow(
  <MuiThemeProvider>
    <FeatureCard
      feature={enabledFeatureProps}
    />
  </MuiThemeProvider>
).dive();

// a FeatureCard component for a disabled feature
const disabledWrapper = shallow(
  <MuiThemeProvider>
    <FeatureCard
      feature={disabledFeatureProps}
    />
  </MuiThemeProvider>
).dive();

// TODO: get state after render component
describe('<FeatureCard />', () => {

  it('should have default closed <Dialog />', () => {
    expect(enabledWrapper.state().open).toEqual(false);
    expect(disabledWrapper.state().open).toEqual(false);
  });

  it('should render a <Card> tag', () => {
    expect(enabledWrapper.find('Card').length).toEqual(1);
  });

  it('should have a red <CardHeader /> for enabled features', () => {
    expect(enabledWrapper.find('CardHeader').prop('style').backgroundColor).toEqual('lightcoral')
  });

  it('should have a green <CardHeader /> for disabled features', () => {
    expect(disabledWrapper.find('CardHeader').prop('style').backgroundColor).toEqual('lightgreen');
  });

});
