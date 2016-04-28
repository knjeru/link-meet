import React, {Component} from 'react';

class HomeSection extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="hero">
                <div className="logo">
                    <img src="http://us.123rf.com/450wm/neyro2008/neyro20081508/neyro2008150800323/43837571-reminder-icon-hand-with-finger-on-which-is-tied-ribbon-bow.jpg?ver=6"/>
                </div>
                <h1>Welcome To Meetup Minder</h1>
                <button className="mybtn">Login</button>
                <button className="mybtn">Register</button>
            </div>
        );
    }
}

export default HomeSection;