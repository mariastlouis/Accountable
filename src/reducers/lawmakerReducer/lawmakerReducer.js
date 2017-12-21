const lawmakerReducer = (store = [], action) =>{
    {console.log('action', action.lawmakers)}
  switch (action.type){
    case 'MAKE_LAWMAKER_ARRAY':
    return [...store, ...action.lawmakers];
  
  default: 
    return store;
  }
};

export default lawmakerReducer;