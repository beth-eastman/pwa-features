/**
 * Testing the FileItem component
 */
import * as React from 'react';
import FileItem from '../PWAFeatures/Features/FileItem';
import * as renderer from 'react-test-renderer';


/*
  ShallowRender.dive() will return <FileItem /> component
 */
const wrapper = renderer.create(
    <FileItem
      name={'Some File'}
      type={'File Type'}
      size={1}
      lastModifiedDate={'1 billion years ago'}
    />
);

// tests
describe('<FileItem />', () => {

  it('should match snapshot tests', () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
