import React, {Component} from 'react';

class NavSection extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="navbar">w

        <a href='/main' className="navBtn"> New Search </a> 
        <a href='/profile' className="navBtn"> My Profile </a>
          <a href='/login' className="navBtn">Login </a>
        <a href='/logout' className="navBtn"> Logout </a>

      </div>    );
  }
}

export default NavSection;