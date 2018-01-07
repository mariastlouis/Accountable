import * as actions from '../index.js';
import { mockSelectedLawmaker }  from '../../mockData/mockSelectedLawmaker.js';
import { mockLawmakerArray } from '../../mockData/mockLawmakerArray.js';

describe('Action tests', () => {
  it('should make a lawmaker array', () => {
   const lawmakers = [mockLawmakerArray];
   const expected = {
    type: 'MAKE_LAWMAKER_ARRAY',
    lawmakers
   };
   expect(actions.makeLawmakerArray(lawmakers)).toEqual(expected);

  });

  it('should make a selected lawmaker object', () => {
   const lawmaker = mockSelectedLawmaker;
   const expected = {
    type: 'SELECT_LAWMAKER',
    lawmaker
   };
   expect(actions.setSelectLawmaker(lawmaker)).toEqual(expected);

  });

  it('should set a selected lawmaker when clicked', () => {
   const lawmaker = mockSelectedLawmaker;
   const expected = {
    type: 'CLICK_LAWMAKER',
    lawmaker
   };
   expect(actions.setClickedLawmaker(lawmaker)).toEqual(expected);

  })


});