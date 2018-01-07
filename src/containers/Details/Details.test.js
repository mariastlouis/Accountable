import {DetailsPage, mapStateToProps} from './DetailsPage';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedLawmaker } from '../../mockData/mockSelectedLawmaker'

describe ('DetailsPage tests', () => {
  let mockLawmakerDetails;

  beforeEach (() => {
    mockLawmakerDetails = mockSelectedLawmaker;
    console.log(mockLawmakerDetails.id)
    renderedPage = shallow (
      <DetailsPage 
        id = {mockLawmakerDetails.id}
        firstName = {mockLawmakerDetails.firstName}
        lastName = {mockLawmakerDetails.lastName}
        party= {mockLawmakerDetails.party}
        image = {mockLawmakerDetails.image}
      />
    )

  });

   it.skip('should render correctly', () =>{

   console.log( renderedPage.debug() );
  });




});