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
          <div className="form" >
            <form  onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>

                <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-label" {...email}/>
                </div>
                <div className="text-help">
                    {email.touched ? email.error : ''}
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control form-label" {...password}/>
                </div>
                <div className="text-help">
                    {password.touched ? password.error : ''}
                </div>

                <button type="submit" className="form-btn">Submit</button>
                <button type="button" className="form-btn">Cancel</button>
            </form>
          </div>
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
