import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPerson} from '../../actions/index';
import {Link} from 'react-router';

class PersonSection extends Component {
    componentWillMount() {
        this.props.fetchPerson(this.props.params.id);
    }


    render() {
        const person = this.props.person;
        
        return (
            <div>
                <h3>{person.name}</h3>
                <ul>
                    <li>{person.city}, {person.state}</li>
                    <Link to={person.id + '/personform'}>Save this person</Link>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {person: state.meetUp.person}
}

export default connect(mapStateToProps, {fetchPerson})(PersonSection);
