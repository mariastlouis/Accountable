import {DetailsPage, mapStateToProps} from './DetailsPage';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedLawmaker } from '../../mockData/mockSelectedLawmaker'
import { mockStoreData } from '../../mockData/mockStoreData.js';
import { mockLawmakerArray } from '../../mockData/mockLawmakerArray.js';


describe ('DetailsPage tests', () => {

  let renderedPage;
  let mockProps

  beforeEach (() => {

    mockProps = mockStoreData;
    renderedPage = shallow (
      <DetailsPage />)

  });

});

describe('map stateToPropsTests', () => {
  it('should pull lawmakers from the store', () => {
    const mockStore = {
      lawmakers: mockLawmakerArray 
    }
    const result = mapStateToProps(mockStore);
    expect(result.lawmakers).toEqual(mockStore.lawmakers);
  })

});
