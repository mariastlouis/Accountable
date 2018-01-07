import  { AddressForm, mapDispatchToProps } from './AddressForm.js';
import React from 'react';
import { shallow} from 'enzyme';

const defaultState = {
  address: 'Denver, CO',
  selectedLawmakers: []    
};

describe ('AddressForm component tests', () => {

  let renderedComponent;

  beforeEach(() => {

    renderedComponent = shallow(<AddressForm />)
  });


 it('should render', () =>{
  expect(renderedComponent).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
   });

   it('Should have a default state', () => {
    expect(renderedComponent.state()).toEqual(defaultState);
  });

  it('should call handleFormSubmit on submitForm', () => {
      const mockHandleFormSubmit = jest.fn()
      const mockEvent = { preventDefault: jest.fn() }
      const submitButton = renderedComponent.find('button').first()
      expect(mockHandleFormSubmit.mock.calls.length).toEqual(0)
    });
});

describe('mapDispatchToProps tests', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when lawmakerClick is called', () => {
      result.lawmakerClick();
      expect(mockDispatch).toHaveBeenCalled();
    })
});