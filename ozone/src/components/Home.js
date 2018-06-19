import  React from 'react';
import ReactDOM from 'react-dom';
import './home.css';

class Home extends React.Component {
  render () {
    return (
      <div className='home-wrapper'>

        <div className='nav'>
          <div className='nav-button'><p>My List</p></div>
          <div className='nav-button'>Route List</div>

        </div>

    </div>
    )
  }
}

export default Home;
