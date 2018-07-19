import constants from './../constants';
const {types} = constants

const FullListReducer = (state = {}, action) => {
  switch(action.type) {
    case types.RECEIVED: {
      const fullList = Object.assign({}, action.payload);

      fullList.routes.forEach((route) => {
         let newRouteRating = route.rating.slice(2,4)
         route.starVotes = parseFloat(newRouteRating);
      })

      function compare(a,b){
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;
        return 0;
      }
      fullList.routes.sort(compare);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
