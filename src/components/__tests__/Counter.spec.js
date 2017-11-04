import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

it('renders correctly', () => {
  const tree = renderer.create(
    <Counter count={1} />
  );
  expect(tree).toMatchSnapshot();
});
