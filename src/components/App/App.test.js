import  { mapDispatchToProps, mapStateToProps  }  from './App.js';
import { mockLawmakerArray } from '../../mockData/mockLawmakerArray.js';


describe('mapDispatchToProps tests', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch when storeLawmakers is called', () => {
    result.storeLawmakers();
    expect(mockDispatch).toHaveBeenCalled();
  });


  it('should call dispatch when lawmaker click is called', () => {
    result.lawmakerClick();
    expect(mockDispatch).toHaveBeenCalled();
  });
});

describe('map stateToPropsTests', () => {
  it('should pull lawmakers from the store', () => {
    const mockStore = {
      lawmakers: mockLawmakerArray 
    };
    const result = mapStateToProps(mockStore);
    expect(result.lawmakers).toEqual(mockStore.lawmakers);
  });

});

