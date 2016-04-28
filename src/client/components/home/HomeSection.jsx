import React, {Component} from 'react';

class HomeSection extends Component {
    render() {
        return(
            <div className="hero">
                
                <h1>Welcome To Meetup Minder</h1>
                <a href="./login"><button className="mybtn">Login</button></a>
                 <a href="./register"><button className="mybtn">Register</button></a>
            </div>
        );
    }
}

export default HomeSection;