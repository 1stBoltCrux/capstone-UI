import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import Menu from './Menu.js'

class EditGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state={isMenuHidden: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isMenuHidden: !prevState.isMenuHidden
    }));
  }
  render()  {
    let menuVisibility = null;
    if (this.state.isMenuHidden === false) {
      menuVisibility = <Menu/>;
    } else {
      menuVisibility = null;
    }
    return(
      <div className='edit-grade-wrapper'>

        <div className='shield'><p><span className='your-grade'>5.11+</span></p></div>
        <div className='grade-dropdown' onClick={this.handleClick}></div>
        {menuVisibility}
      </div>

    );
  }
}
export default EditGrade;
