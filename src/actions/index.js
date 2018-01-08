
export const makeLawmakerArray = lawmakers => ({
  type: 'MAKE_LAWMAKER_ARRAY',
  lawmakers
});

export const setSelectLawmaker = (lawmaker) => ({
  type: 'SELECT_LAWMAKER',
  lawmaker
});

export const setClickedLawmaker = (lawmaker) => ({
  type: 'CLICK_LAWMAKER',
  lawmaker
});