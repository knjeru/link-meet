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
                     // https://files.slack.com/files-pri/T027GBYPB-F14TX6Q2C/download/logo.png
                    <img src="http://us.123rf.com/450wm/neyro2008/neyro20081508/neyro2008150800323/43837571-reminder-icon-hand-with-finger-on-which-is-tied-ribbon-bow.jpg?ver=6"/>

                    {this.renderLinks()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, null)(NavSection);