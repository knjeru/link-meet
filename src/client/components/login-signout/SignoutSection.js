import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/index';

class SignOut extends Component {

    componentWillMount() {
        this.props.signOut();
    }

    render() {
        return(
            <div>Visit us again soon!</div>
        );
    }
}

export default connect (null, {signOut})(SignOut);