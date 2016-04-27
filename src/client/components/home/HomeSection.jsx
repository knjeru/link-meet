import React, {Component} from 'react';

class HomeSection extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="hero">
                <h1>Welcome To Meetup Minder</h1>
                <h4>I'd like to add you to my professional network on LinkedI</h4>
                <button class="mybtn">Login</button>
                <button class="mybtn">Register</button>
            </div>
        );
    }
}

export default HomeSection;