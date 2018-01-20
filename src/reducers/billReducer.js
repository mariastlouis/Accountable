const defaultState = 
  {
    billSelected: [],
    bills: []
  };

const billReducer = (state = defaultState, action) =>{
  switch (action.type){
  case 'MAKE_BILL_ARRAY':

    return { ...state,
      billSelected: '',
      bills: action.bills
    };

  case 'CLICK_BILL':

    return {
      ...state,
      billSelected:action.bill
    };

  default: 
    return state;
  }
};

export default billReducer;