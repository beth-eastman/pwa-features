/**
 * Testing the FeatureCard component
 */
import * as React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FeatureCard from '../PWAFeatures/FeatureCard';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { FeatureInterface } from '../../res/data/features';

injectTapEventPlugin();

const featureComponent = (<h1>Fancy Feature Component</h1>);

const featureInterface : FeatureInterface = {
  id: 0,
  featureName: 'SomeFancyFeatureName',
  featureDetails: 'Some Details about a component',
  featureEnabled: false,
  component: featureComponent,
}

const featureProps = {
  feature: featureInterface,
};

const renderComponent = (props = featureProps) => mount(
  <MuiThemeProvider>
    <FeatureCard
      {...props}
    />
  </MuiThemeProvider>
);

// TODO: get state after render component

describe('<FeatureCard />', () => {

  it('should render an <Card> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Card').length).toEqual(1);
  });

});
