import React, {Component, PropTypes} from 'react';
import {reduxForm, initialize} from 'redux-form';
import {savePerson, fetchPerson} from '../../actions/index';

class PersonForm extends Component {

    componentWillMount() {
        this.props.fetchPerson(this.props.params.id)
            .then((data) => {
                this.props.dispatch(initialize('SavePersonForm', {
                    name: data.payload.data.data.name,
                    photoUrl: data.payload.data.data.photo.thumb_link
                }, ['photoUrl', 'name', 'notes']))
            });
    }

    onSubmitForm(props) {
        this.props.savePerson(localStorage.getItem('id'), props);
        this.context.router.push('/minders');
    }

    render() {
        const {fields: {name, photoUrl, notes}, handleSubmit} = this.props;

        return(
            <div className="form">
                <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                    <div>
                        <label className="form-label">Avatar</label>
                        <input type="text" {...photoUrl}/>
                    </div>
                    <div>
                        <label className="form-label">Name</label>
                        <input type="text" {...name}/>
                    </div>
                    <div>
                        <label className="form-label">Notes</label>
                        <textarea type="text" {...notes}/>
                    </div>
                    <button type="submit" className="form-btn">Save Person</button>
                </form>
            </div>
        )
    }
}


function validate(values) {
    const errors = {};

    if(!values.name) {
        errors.name = 'Enter a name!'
    }

    if(!values.photoUrl) {
        errors.photoUrl = 'Include a profile picture!'
    }

    if(!values.notes) {
        errors.notes = 'Add a note!'
    }


    return errors;
}

PersonForm.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state) {
    return {person: state.meetUp.person}
}

export default reduxForm
    ({
        form: 'SavePersonForm',
        fields: ['name', 'photoUrl', 'notes'],
        validate
    }, mapStateToProps, {savePerson, fetchPerson})
(PersonForm);