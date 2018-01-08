import  Home  from './Home.js';
import React from 'react';
import { shallow } from 'enzyme';

describe ('Home component tests', () => {
let renderedComponent;

beforeEach (() => {
  renderedComponent = shallow (
    <Home />);
});

  it('should render', () =>{
    expect(renderedComponent).toBeDefined();
  });

  it('should have a main-hed, and description text and a website description', () =>{
    expect(renderedComponent.find('.main-hed').length).toEqual(1);
    expect(renderedComponent.find('.description-text').length).toEqual(1);
    expect(renderedComponent.find('.website-description').length).toEqual(1);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

});