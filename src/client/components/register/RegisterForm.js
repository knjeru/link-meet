import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createUser} from '../../actions/index';
import {Link} from 'react-router';


class RegisterForm extends Component {

    onSubmit (props) {
        this.props.createUser(props)
            .then(() => {
            //    set our token to storage
                this.context.router.push('/main');
            });
    }

    render() {
        const {fields: {username, email, password}, handleSubmit} = this.props;

        return (
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>Register!</h3>
              <div>
                  <label>UserName</label>
                  <input type="text" className="form-control" {...username}/>
              </div>
              <div className="text-help">
                  {username.touched ? username.error : ''}
              </div>
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
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.username) {
        errors.username = 'Enter a username!'
    }

    if(!values.email) {
        errors.email = 'Enter an email!'
    }

    if(!values.password) {
        errors.password = 'Enter a strong password!'
    }

    return errors;
}

RegisterForm.contextTypes = {
    router: PropTypes.object
};

export default reduxForm
    ({
        form: 'NewUserRegisterForm',
        fields: ['username', 'email', 'password'],
        validate
    }, null, {createUser})
(RegisterForm);