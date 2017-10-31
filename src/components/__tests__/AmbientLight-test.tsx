import * as React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AmbientLight from '../PWAFeatures/Features/AmbientLight';

// mock global event
const event = {value: 0};
window.ondevicelight = jest.fn().mockReturnValue(event);

const wrapper = () => shallow(
  <MuiThemeProvider>
    <AmbientLight />
  </MuiThemeProvider>
).dive();

describe('<AmbientLight />', () => {

  it('should return dark light for small values', () => {
    const wrap = wrapper();
    // getAmbient() with small value should have dark light
    wrap.instance().getAmbient({value: 2});
    expect(wrap.state().type).toEqual('darklight');
  });

  it('should return bright light for large values', () => {
    const wrap = wrapper();
    // getAmbient() with large value should have bright light
    wrap.instance().getAmbient({value: 392});
    console.log(wrap.state().type);
    expect(wrap.state().type).toEqual('brightlight');
  });

});
