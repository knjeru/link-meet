import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class NavSection extends Component {


    renderLinks() {
        if(this.props.authenticated) {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to='minders' className="navBtn"> My Minders </Link>
                        </li>
                        <li>
                            <Link to='main' className="navBtn"> New Search </Link>
                        </li>
                        <li>
                            <Link to='logout' className="navBtn"> Logout </Link>
                        </li>
                    </ul>
                </div>
            );

        } else {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to='login' className="navBtn">Login </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="navbar">
                    <a href="/main"><img src="https://files.slack.com/files-pri/T027GBYPB-F14TX6Q2C/download/logo.png"/></a>
                    {this.renderLinks()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, null)(NavSection);