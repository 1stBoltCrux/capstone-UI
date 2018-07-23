import constants from './../constants';
const {c} = constants;

const MyListReducer = (state = [], action) => {
  switch(action.type) {
    case c.ADD_TO_LIST: {
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
      function compare(a,b){
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;
        return 0;
      }
      newState.sort(compare);
      return newState;
    }

    case c.SET_MY_LIST: {

        const myList = [];
      Object.keys(action.payload).forEach((key) => {
        myList.push(action.payload[key]);
      })
      console.log(myList);
      return myList;
    }
    default:
    return state
  }
}

export default MyListReducer;
