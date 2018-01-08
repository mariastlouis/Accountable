import lawmakerReducer from '../lawmakerReducer/lawmakerReducer.js';
import * as actions from '../../actions/index.js';
import { mockSelectedLawmaker} from '../../mockData/mockSelectedLawmaker.js';
import { mockLawmakerArray, mockStore } from '../../mockData/mockLawmakerArray.js';
import { mockStoreData} from '../../mockData/mockStoreData.js';

const defaultState = 
  {
  isSelected: [],
  lawmakers: []
  };

const fullState = {
  lawmakers: {
  isSelected: mockSelectedLawmaker,
  lawmakers: mockLawmakerArray
  }
}



describe('lawmakerReducer tests', () => {
  it('should return the default state on page load', () => {
    const expected = defaultState;
    expect(lawmakerReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with a lawmaker array', () =>{
    const expected = mockStore;
    expect(lawmakerReducer(undefined, actions.makeLawmakerArray(fullState)))
  });

  it('should return a new state with a selected lawmaker', () => {
    const expected = fullState;
    expect(lawmakerReducer(undefined, actions.setSelectLawmaker(fullState)))
  });

  it('should return a new state with a clicked lawmaker', () => {
    const expected = fullState;
     expect(lawmakerReducer(undefined, actions.setClickedLawmaker(fullState)))

  })

});