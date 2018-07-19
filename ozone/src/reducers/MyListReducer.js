


const MyListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_LIST': {
      console.log(state);
      let checkId = [];
      let newState = state.slice();
      newState.forEach((elem) => {
        checkId.push(elem.id)
      });
      if (newState.length <= 0) {
        newState.push(action.route)
      } else if (checkId.includes(action.route.id)){
        return newState;
      } else {
        newState.push(action.route)
      }
      return newState;
    }
    default:
    return state
  }
}

export default MyListReducer;
