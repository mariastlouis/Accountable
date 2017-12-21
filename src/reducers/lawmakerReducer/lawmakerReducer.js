const lawmakerReducer = (store = [], action) =>{
  switch (action.type){
    case 'MAKE_LAWMAKER_ARRAY':
    return [...store, ...action.lawmakers];
  
  default: 
    return store;
  }
};

export default lawmakerReducer;