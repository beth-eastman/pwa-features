/**
 * Testing the FileItem component
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import FileItem from '../PWAFeatures/Features/FileItem';


/*
  ShallowRender.dive() will return <FileItem /> component
 */
const wrapper = shallow(
    <FileItem
      name={'Some File'}
      type={'File Type'}
      size={1}
      lastModifiedDate={'1 billion years ago'}
    />
);

// tests
describe('<FileItem />', () => {

  it('should be a list item', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  // TODO: fix props[] undefined error
  // it('should have correct props', () => {
  //   const props = {
  //     name: 'Some File',
  //     type: 'File Type',
  //     size: 1,
  //     lastModifiedDate: '1 billion years ago',
  //   };
  //   // console.log(wrapper.instance.props());
  //   expect(wrapper.prop('name')).toEqual(props.name);
  //   expect(wrapper.prop('type')).toEqual(props.type);
  //   expect(wrapper.prop('size')).toEqual(props.size);
  //   expect(wrapper.prop('lastModifiedDate')).toEqual(props.lastModifiedDate);
  // });

});
