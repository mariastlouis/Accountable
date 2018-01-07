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

  })


});