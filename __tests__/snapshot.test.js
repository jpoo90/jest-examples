// Added
// yarn add -D react-test-renderer
// babel-preset-react
//
// add react to babelrc
import React from 'react';
import Seasons from '../code/snapshotReact';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-glamor-react';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

it('renders correctly', () => {
  const seasonsComponent = renderer.create(<Seasons />).toJSON();
  expect(seasonsComponent).toMatchSnapshot();
});
