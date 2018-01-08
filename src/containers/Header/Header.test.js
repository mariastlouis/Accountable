import Header from './Header.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('header comoponent tests', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Header />);
  });

  it('should render', () =>{
    expect(renderedComponent).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

});