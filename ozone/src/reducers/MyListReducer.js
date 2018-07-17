


const MyListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_LIST': {
    const newState = state.slice();
    if (newState.length <= 0) {
      newState.push(action.route)
    }
    newState.forEach((elem) => {
      console.log(action.route.id);
      if (elem.id !== action.route.id)
      newState.push(action.route)
    })
    return newState
    }
    default:
    return  state
  }
}

export default MyListReducer;
