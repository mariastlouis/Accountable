import getLawmaker from '../helper/helper.js';


// export const getNewLawmakers = () => async dispatch => {
//   const newLawmakers = await getLawmaker();
//   dispatch(makeLawmakerArray(newLawmakers));
// };

export const makeLawmakerArray = lawmakers => ({
  type: 'MAKE_LAWMAKER_ARRAY',
  lawmakers
});
