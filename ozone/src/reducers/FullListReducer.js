const FullListReducer = (state = {}, action) => {
  switch(action.type) {
    case 'RECIEVED': {
      const fullList = Object.assign({}, action.payload);
      console.log(fullList);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
