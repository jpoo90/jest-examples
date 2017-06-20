// Added
// yarn add -D enzyme
// yarn add -D enzyme-to-json
// babel-preset-react
//
// add react to babelrc
import React from 'react';
import Seasons from '../code/snapshotReact';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {matcher, serializer} from 'jest-glamor-react';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

it('renders correctly', () => {
  const wrapper = shallow(<Seasons />);
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor();
});
