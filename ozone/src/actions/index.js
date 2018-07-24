import constants from './../constants';
import firebase from 'firebase';
const { c, firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const fullListRef = firebase.database().ref('fullList');
const myListRef = firebase.database().ref('myList');

export function watchFireBaseFullListRef() {
  return function(dispatch) {
    fullListRef.on('value', data => {
      let list = data.val()
      dispatch(addListToFirebase(list))
    })
  }
}

export function addListToFirebase(list){
  return {
    type: c.RECEIVED,
    fullList: list
  }
}

export function watchFireBaseMyListRef(route){
  return function(dispatch) {
    myListRef.on('value', data => {
      let myList = data.val()
      dispatch(addMyListToFirebase(myList))
      // addToList(route, myList)
    })
  }
}

export function addMyListToFirebase(myList){
  return {
    type: c.SET_MY_LIST,
    payload: myList
  }
}



export function addToList(route, myList){
  console.log(myList);
  let checkFireId = [];
  myList.forEach((routeCheck) => {
    checkFireId.push(routeCheck.id)
  })
  console.log(checkFireId);
  if (checkFireId.includes(route.id) === false){
    myListRef.push(route);

  } else {
    console.log('do not add');
  }


  return {
    type: c.ADD_TO_LIST,
    route: route,
    myList: myList
  }
}

export function deleteFromFirebase(key){
  console.log(key);
  myListRef.child(key).remove();
}

export function handleSubmitNotes(_note, key){

  myListRef.child(key).update({
    note: _note.value
  })
  return {
    type: c.NOTES,
    payload: _note
  }
}

// export default function makeCall() {
//   let data;
//   return dispatch => {
//     fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.567&lon=-122.211&maxDistance=1&maxResults=400&minDiff=5.6&maxDiff=5.13&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
//       response => response.json()
//     ).then(function(json){
//       data = json
//       dispatch(makeCallAsync(data));
//     })
//   }
// }
//
// function makeCallAsync(data){
//   return{
//     // type: c.RECEIVED,
//     type: 'hooplah',
//     payload: data
//   }
// }





 export function handleSubmitClick(_name, _type, _grade, routes) {
   return {
     type: c.FILTER,
     payload: {
       name: _name,
       type: _type,
       grade: _grade,
       routes: routes
     }
   }
}



export function emptyArray() {
  console.log('working');
  return {
    type: c.EMPTY_ARRAY
  }
}
