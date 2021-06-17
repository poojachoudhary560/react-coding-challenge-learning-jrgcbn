import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseList from '../components/CourseList';

Enzyme.configure({ adapter: new Adapter() });

describe('Couse List Component', () => {
  test('renders Course Component', () => {
    const courseListWrapper = shallow(<CourseList />);
    expect(courseListWrapper.find('Course')).toHaveLength(1);
  });
})