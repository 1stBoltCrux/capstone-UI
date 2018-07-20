import constants from './../constants';
const { types } = constants

export default function makeCall() {
  let data;
  return dispatch => {
    fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.567&lon=-122.211&maxDistance=1&maxResults=400&minDiff=5.6&maxDiff=5.13&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
      response => response.json()
    ).then(function(json){
      data = json
      dispatch(makeCallAsync(data));
    })
  }
}

function makeCallAsync(data){
  return{
    type: types.RECEIVED,
    payload: data
  }
}

export function addToList(props, route){
  return {
    type: types.ADD_TO_LIST,
    payload: route
  }
}



 export function handleSubmitClick(_name, _type, _grade, routes) {
   return {
     type: types.FILTER,
     payload: {
       name: _name,
       type: _type,
       grade: _grade,
       routes: routes
     }
   }



}
