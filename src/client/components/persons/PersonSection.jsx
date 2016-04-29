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
            <div className="personBox">
                <h2 className="title">{person.name}</h2>
                <ul className="person">
                    <li className="personCol"><h2>{person.city}, {person.state}</h2></li>
                    <Link  className="personCol" to={person.id + '/personform'}><h2>Save this person</h2></Link>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {person: state.meetUp.person}
}

export default connect(mapStateToProps, {fetchPerson})(PersonSection);
