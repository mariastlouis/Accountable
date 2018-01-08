import  BillDetail  from './BillDetail.js';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedLawmaker, mockSignedBill, mockUnsignedBill } from '../../mockData/mockSelectedLawmaker';


describe ('Bill Detail component tests', () => {
  let mockLawmakerDetails = mockSelectedLawmaker;
  let renderedComponent;
 

  beforeEach (() => {
    renderedComponent = shallow (
      <BillDetail bills = {mockLawmakerDetails.bills}/>);
  });


   it('should render', () =>{
    expect(renderedComponent).toBeDefined();
    });

   it('should have a class bill-detail and card-container', () => {
    expect(renderedComponent.find('.bill-detail').length).toEqual(1);
    expect(renderedComponent.find('.card-container').length).toEqual(1);
   });

   it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
   });


});

  describe ('Bill Detail signature tests', () => {
  


   it('should include information if bill is signed ', () => {
      let signedBillComponent = shallow (
      <BillDetail bills = {mockSignedBill}/>);     
    
      expect(signedBillComponent.contains(
       'Signed by Governor')).toEqual(true)
   });

   it('should not include signed information if bill is unsigned ', () => {
      let unsignedBillComponent = shallow (
      <BillDetail bills = {mockUnsignedBill}/>);     

      expect(unsignedBillComponent.contains(
       'Signed by Governor')).toEqual(false)
   });


   it('should render a check image if bill is signed by governor', () => {
      let signedBillComponent = shallow (
      <BillDetail bills = {mockSignedBill}/>);
      expect(signedBillComponent.find('.check-icon').length).toEqual(1)
   });


});
