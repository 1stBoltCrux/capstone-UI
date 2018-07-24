import React from 'react';
import ReactDom from 'react-dom';
import styles from './detailpage.css';
import Nav from './Nav.js'
import star from './../imgs/icon-star.svg'
import moreInfo from './../imgs/icon-more-info.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToList, watchFireBaseMyListRef, deleteFromFirebase } from './../actions';
import EditModal from './EditModal';
import Notes from './Notes';

class DetailPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notesModal: false
    }
    this.handleNotesModal = this.handleNotesModal.bind(this);
  }

  handleNotesModal(){
    console.log('hey');
    this.setState(prevState => ({
      notesModal: !prevState.notesModal
    }));
  }

  render() {
    console.log(this.props);

    const {myRoutes, route, routeId, pitches, name, rating, location, routeList } = this.props.location.state;
    console.log(route);

    let starArray = [];
    let starCounter = parseInt(route.stars)
    console.log(starCounter);
    while (starCounter > 0) {
      starCounter --
      starArray.push(star)
    }
    console.log(starArray);
    let myRouteCheck = [];
    let editModalVisible = null;
    this.props.myList.forEach((myRoute) => {
      myRouteCheck.push(myRoute.firebaseId)
      console.log(myRouteCheck);
    })
    if (myRouteCheck.includes(route.firebaseId) && this.state.notesModal) {
      console.log('ah yes');
      editModalVisible = <Notes
      onNotesModal={this.handleNotesModal}
      firebaseId={route.firebaseId}
      name={name}
    notes={route.note}/>
    } else {
      editModalVisible = null;
    }


    return (
      <div className={styles.detailPageWrapper}>
        <div className={styles.detailInfoBox}>
            <div className={styles.detail}><h3>{name}</h3></div>
            <div className={styles.detail}><p>{rating}</p></div>
            <div className={styles.detail}><p>{location}</p></div>
            <div className={styles.detail}><p><span className={styles.brightGreen}>Pitches: {pitches}</span></p></div>
            <div className={styles.starWrapper}>
              {starArray.map((star, i)=>
                <div className={styles.detail} key={i}><img src={star}/></div>
              )}
            </div>

            <div className={styles.detail} className={styles.infoButton}><a href={route.url}> <button>More Info</button></a></div>
        </div>
        <div className={styles.routeImage}>
        </div>
        <div className={styles.buttonBackdrop}>
          <div className={styles.topButtons}>
            <div className={styles.topButton1}><p><span className={styles.brightGreen}>Grade</span></p></div>
            <div onClick={()=>deleteFromFirebase(route.firebaseId)} className={styles.topButton2}><p><span className={styles.brightGreen}>Complete</span></p></div>
            <div onClick={()=>this.handleNotesModal()} className={styles.topButton3}><p><span className={styles.brightGreen}>Notes</span></p></div>
          </div>
          <div className={styles.bottomButtons}>
            <div onClick={()=> this.props.dispatch(addToList(route, this.props.myList))} className={styles.bottomButton1}><p><span className={styles.brightGreen}>Add to List</span></p></div>
            <div className={styles.bottomButton2}><p><span className={styles.brightGreen}>Rate</span></p></div>
          </div>

        </div>
        {editModalVisible}
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

export default connect(mapStateToProps)(DetailPage);
