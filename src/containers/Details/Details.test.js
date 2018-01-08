import {mapStateToProps} from './DetailsPage';
import { mockLawmakerArray } from '../../mockData/mockLawmakerArray.js';


describe('map stateToPropsTests', () => {
  it('should pull lawmakers from the store', () => {
    const mockStore = {
      lawmakers: mockLawmakerArray 
    };
    const result = mapStateToProps(mockStore);
    expect(result.lawmakers).toEqual(mockStore.lawmakers);
  });

});
