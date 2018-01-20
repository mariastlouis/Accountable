
const defaultState = 
  {
    isSelected: [],
    lawmakers: [],
    localLawmakers: [],
    address: 'Denver, CO'
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

  case 'SET_LOCAL_LAWMAKERS':
  
    return {
      ...state,
      localLawmakers: action.lawmakerArray
    };

  case 'SET_ADDRESS':
  
    return {
      ...state,
      address: action.address
    };    

  default: 
    return state;
  }
};

export default lawmakerReducer;