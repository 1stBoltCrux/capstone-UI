import constants from './../constants';
const {types} = constants

const FilteredListReducer = (state = {}, action) => {
  switch(action.type) {
    case types.FILTER: {
      let resultArray = [];
      const {routes, name, type, grade } = action.payload;
      let filteredArray = routes.filter((route) => {
        return route.name === name;
      })
        return filteredArray
    }
  }
  return state;
}

export default FilteredListReducer;
