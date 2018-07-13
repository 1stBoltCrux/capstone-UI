import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/Nav'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware);

let unsubscribe = store.subscribe(() =>
store.getState()
);

console.log(store.getState());

store.dispatch((dispatch) => {
  dispatch({type: 'FETCHING'})
  fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
    response => response.json(),
    error => console.log('an error occured', error)
  ).then(function(json){
    dispatch({type: 'RECIEVED', payload: json})
  })
})

const doesThisWork = fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
   response => response.json(),
   error => console.log('an error occured.', error)
 ).then(function(json){
   return json;
 });

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <div>
      <App/>
    </div>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));


registerServiceWorker();
