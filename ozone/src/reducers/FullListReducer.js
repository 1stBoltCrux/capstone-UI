import constants from './../constants';
const { c } = constants

const FullListReducer = (state = {}, action) => {
  switch(action.type) {
    case c.RECEIVED: {
      const fullList = [];
      // const fullList = Object.assign({}, action.payload);
      // console.log(action.fullList);
      Object.keys(action.fullList).forEach((key) => {
        const routeWithId = Object.assign(action.fullList[key].route, {firebaseId: key});
        fullList.push(routeWithId);
      })

      // fullList.forEach((route) => {
      //   if (route.pitches === '') {
      //     route.pitches = 1;
      //   }
      //    let newRouteRating = route.rating.slice(2,4)
      //    route.starVotes = parseFloat(newRouteRating);
      //    if (route.location[3]) {
      //      let trimmedLocation = route.location[3].slice(4,route.location[3].length)
      //      route.location[2] = route.location[2] + ', ' + trimmedLocation;
      //    }
      //
      // })
    //   const myList = [];
    // Object.keys(action.payload).forEach((key) => {
    //   //this is where i get my firebase id in myList
    //   const newObject = Object.assign(action.payload[key], { firebaseId : key});
    //   console.log(newObject);
    //   myList.push(newObject);

      function compare(a,b){
        if (a.starVotes < b.starVotes)
        return -1;
        if (a.starVotes > b.starVotes)
        return 1;
        return 0;
      }
      fullList.sort(compare);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
