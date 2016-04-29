import React, {Component} from 'react';

class NavSection extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="navbar">
                <div className="logo">
                    <img src="http://us.123rf.com/450wm/neyro2008/neyro20081508/neyro2008150800323/43837571-reminder-icon-hand-with-finger-on-which-is-tied-ribbon-bow.jpg?ver=6"/>
                </div>

                <a href='/main' className="navBtn"> New Search </a>
                <a href='/profile' className="navBtn"> My Profile </a>
                <a href='/login' className="navBtn">Login </a>
                <a href='/logout' className="navBtn"> Logout </a>

      </div>
    );
  }
}

export default NavSection;