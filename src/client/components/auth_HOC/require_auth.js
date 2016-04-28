import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { loginUser } from '../../actions/index';


export default function(ProtectedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            if(!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ProtectedComponent {...this.props}/>
        }
    }

    Authentication.contextTypes = {
        router: PropTypes.object
    };


    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated}
    }

    return connect (mapStateToProps, {loginUser})(Authentication);
}