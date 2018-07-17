import constants from './../constants';
const { types } = constants

export default function makeCall() {
  let data;
  return dispatch => {
    fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
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
