import  Committees  from './Committees.js';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedLawmaker } from '../../mockData/mockSelectedLawmaker';

describe('Committee component tests', () => {
  let mockLawmakerDetails = mockSelectedLawmaker;
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <Committees committees = {mockLawmakerDetails.committees}/>);
  });

  it('should render', () =>{
    expect(renderedComponent).toBeDefined();
  });

  it('should have a class of committees and committee head', () => {
    expect(renderedComponent.find('.committees').length).toEqual(1);
    expect(renderedComponent.find('.committee-hed').length).toEqual(1);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should capitalize the committee position when given a lowercase position', () => {
    expect(renderedComponent.contains(
      'Member')).toEqual(true);
  });


});

