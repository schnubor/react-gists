import React from 'react';
import Gist from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Gist id="123"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
