import constants from './../constants';
const {types} = constants

const FullListReducer = (state = {}, action) => {
  console.log(action.payload);
  switch(action.type) {
    case types.RECEIVED: {
      const fullList = Object.assign({}, action.payload);
      console.log(fullList);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
