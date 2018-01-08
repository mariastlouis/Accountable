import  Contact  from './Contact.js';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedLawmaker } from '../../mockData/mockSelectedLawmaker';

describe('Contact component tests', () => {
  let mockLawmakerDetails = mockSelectedLawmaker;
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <Contact 
        id = {mockLawmakerDetails.id}
        firstName = {mockLawmakerDetails.contact.firstName}
        lastName = {mockLawmakerDetails.contact.lastName}
        party= {mockLawmakerDetails.contact.party}
        image = {mockLawmakerDetails.contact.image}
        website = {mockLawmakerDetails.contact.website}
        phone = {mockLawmakerDetails.contact.phone}
        occupation = {mockLawmakerDetails.contact.occupation}
        district = {mockLawmakerDetails.contact.district}
        chamber = {mockLawmakerDetails.contact.chamber}
      />);

  });

  it('should render', () =>{
    expect(renderedComponent).toBeDefined();
  });

  it('should have a class of Contact, an accent head and a secondary head', () => {
    expect(renderedComponent.find('.Contact').length).toEqual(1);
    expect(renderedComponent.find('.accent-hed').length).toEqual(1);
    expect(renderedComponent.find('.secondary-hed').length).toEqual(1);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

});