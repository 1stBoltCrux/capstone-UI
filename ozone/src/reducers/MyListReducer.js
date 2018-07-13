const MyListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_LIST': {
    const newState = state.slice();
    newState.push(action.route);
    return newState;
    }
  }
  return  state
}

export default MyListReducer;
