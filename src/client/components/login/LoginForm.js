import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {loginUser} from '../../actions/index';
import {Link} from 'react-router';


class LoginForm extends Component {


    onSubmitForm(props) {
        this.props.loginUser(props)
            .then((data) => {
                this.context.router.push('/main');
                localStorage.setItem('token', data.payload.data.data.token);
            })
    }


    render() {
        const {fields: {email, password}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                <h3>Login!</h3>
                <div>
                    <label>Email</label>
                    <input type="email" className="form-control" {...email}/>
                </div>
                <div className="text-help">
                    {email.touched ? email.error : ''}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="form-control" {...password}/>
                </div>
                <div className="text-help">
                    {password.touched ? password.error : ''}
                </div>
                <button type="submit">Submit</button>
                <Link to="/"><button type="button">Cancel</button></Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.email) {
        errors.email = 'Enter an email!'
    }

    if(!values.password) {
        errors.password = 'Enter a password!'
    }

    return errors;
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

export default reduxForm
    ({
        form: 'LoginForm',
        fields: ['email', 'password'],
        validate
    }, null, {loginUser})
(LoginForm);
