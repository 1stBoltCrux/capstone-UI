import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import MyList from './components/MyList.js'
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import makeCall from './actions'
import {addListToFirebase, watchFireBaseFullListRef} from './actions'

class App extends Component {
  componentDidMount(){
    console.log(this.props);
    this.props.watchFireBaseFullListRef()
    this.props.makeCall()

  }

  render() {
    const routes = this.props.fullList.routes
    const myRoutes = this.props.myList
    const filteredList = this.props.filteredList
    return (
      <div className='main-wrapper'>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/myList" exact component={()=> <MyList myRoutes={myRoutes}/> }/>
              <Route path="/" exact component={()=><Home routes={routes} />}/>
              <Route path="/list" render={()=> <List routes={routes} filteredList={filteredList}/>}/>
              <Route path ="/detailpage" exact component={DetailPage}/>
              <Route path ="/editmodal" exact component={EditModal}/>
            </Switch>
          </div>
      </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fullList: state.fullList,
    myList: state.myList,
    filteredList: state.filteredList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    makeCall: makeCall,
    watchFireBaseFullListRef: watchFireBaseFullListRef}, dispatch);
}

 // const doesThisWork = fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
 //    response => response.json(),
 //    error => console.log('an error occured.', error)
 //  ).then(function(json){
 //    return json;
 //  });




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
