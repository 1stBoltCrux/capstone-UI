import  React from 'react';
import ReactDOM from 'react-dom';
import './home.css';

class Home extends React.Component {
  render () {
    return (
      <div className='home-wrapper'>
        <div className='filters'>
          <div className='filter-route'>
            <div className='filter-box' id="filter-title"><p>Filter Routes</p></div>
            <div className='filter-box'><p>name:</p><input type='text'></input></div>
            <div className='filter-box'><p>grade:</p><select></select></div>
            <div className='filter-box'><p>type:</p><select></select></div>
          </div>
          <div className='filter-route-button'><p>Filter Route List</p></div>

          <div className='filter-my-list'>
            <div className='filter-route'>
              <div className='filter-box' id="filter-title"><p>Filter My List</p></div>
            <div className='filter-box'><p>name:</p><input type='text'></input></div>
            <div className='filter-box'><p>grade:</p><select></select></div>
            <div className='filter-box'><p>type:</p><select></select></div>
          </div>
          </div>
          <div className='filter-route-button'><p>Filter My List</p></div>
        </div>

    </div>
    )
  }
}

export default Home;
