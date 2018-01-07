
const defaultState = 
  {
  isSelected: [],
  lawmakers: []
  };

const lawmakerReducer = (state = defaultState, action) =>{
  switch (action.type){
    case 'MAKE_LAWMAKER_ARRAY':

  return { ...state,
      isSelected: '',
      lawmakers: action.lawmakers
    };  
  
    case 'SELECT_LAWMAKER':
    
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