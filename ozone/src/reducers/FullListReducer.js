const FullListReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECIEVED': {
      console.log(action.payload);
    }
  }
  return state;
}

export default FullListReducer;
