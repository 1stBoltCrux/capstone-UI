import constants from './../constants';
const {types} = constants

const FilteredListReducer = (state = {}, action) => {
  switch(action.type) {
    case types.FILTER: {
      let resultArray = [];
      const {routes, name, type, grade } = action.payload;
      console.log(name, type, grade);
      let arrayToFilter = routes.slice();
      arrayToFilter.forEach((route) => {
        if (parseFloat(grade) === route.starVotes && route.type === type) {
          resultArray.push(route);
          return;
        } else if ( name === route.name && !grade && !type){
          resultArray.push(route);
          return;
        } else if (parseFloat(grade) === route.starVotes && !type && !name) {
          resultArray.push(route);
          return;
        } else if (type === route.type && !grade && !name) {
          resultArray.push(route);
          return;
        }
      })
        return resultArray;
    }
  }
  return state;
}

export default FilteredListReducer;
