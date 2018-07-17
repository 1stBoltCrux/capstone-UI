import constants from './../constants';
const {types} = constants

const FullListReducer = (state = {}, action) => {
  switch(action.type) {
    case types.RECEIVED: {
      const fullList = Object.assign({}, action.payload);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
