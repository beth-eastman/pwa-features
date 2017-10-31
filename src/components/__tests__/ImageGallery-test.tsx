/**
 * Testing the ImageGallery component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ImageGallery from '../PWAFeatures/Features/ImageGallery';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const props = {
  images: []
}

const multipleImages = {
  images: ['#', '#']
}

/*
  ShallowRender.dive() will return <ImageGallery /> component
 */
const wrapper = () => shallow(
  <MuiThemeProvider>
    <ImageGallery {...props} />
  </MuiThemeProvider>
).dive();

const withImages = () => shallow(
  <MuiThemeProvider>
    <ImageGallery {...multipleImages} />
  </MuiThemeProvider>
).dive();


// tests
describe('<ImageGallery />', () => {

  it('should have a <GridList />', () => {
    expect(wrapper().find('GridList').length).toEqual(1);
  });

  it('should have 2 column width', () => {
    expect(wrapper().find('GridList').prop('cols')).toEqual(2);
  });

  it('should have a <GridTile /> for each image in props', () => {
    // no images should have no grid tiles
    expect(wrapper().find('GridTile').length).toEqual(0);
    // two images should have two grid tiles
    expect(withImages().find('GridTile').length).toEqual(2);
  });

  it('should show an <img /> for each image in props', () => {
    expect(wrapper().find('img').length).toEqual(0);
    expect(withImages().find('img').length).toEqual(2);
  });

});
