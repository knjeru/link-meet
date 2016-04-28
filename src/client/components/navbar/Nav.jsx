import React, {Component} from 'react';

class NavSection extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="navbar">
        <span>Meetup Minder</span>
        <br></br>
        <a href='/main'> New Search </a> |
        <a href='/profile'> My Profile </a> |
        <a href='/logout'> Logout </a>
        <br></br>
      </div>    );
  }
}

export default NavSection;