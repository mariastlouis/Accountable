
const defaultState = 
  {
  isSelected: [],
  lawmakers: []
  };

const lawmakerReducer = (state = defaultState, action) =>{
  switch (action.type){
    case 'MAKE_LAWMAKER_ARRAY':
    // return [...store, ...action.lawmakers];

  return { ...state,
      isSelected: '',
      lawmakers: action.lawmakers
    };  
  
    case 'SELECT_LAWMAKER':
    
    // const selectedLawmaker =  state.lawmakers.filter(lawmaker => lawmaker.id === action.id)
    // console.log(selectedLawmaker)
    return {
      ...state,
      isSelected:action.lawmaker
    };

    case 'CLICK_LAWMAKER':

    return {
      ...state,
      isSelected:action.lawmaker
    };

  default: 
    return state;
  }
};

export default lawmakerReducer;