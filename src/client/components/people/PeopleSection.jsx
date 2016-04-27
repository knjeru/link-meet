import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../actions/index';

class PeopleSection extends Component {
    componentWillMount() {
        this.props.fetchPeople(this.props.param.name, this.props.param.event_id)
    }

    render() {
        console.log(this.people);
        return(
            <div>People Section</div>
        );
    }
}

function mapStateToProps(state) {
    return {people: state.meetUp.people}
}

export default connect(mapStateToProps, {fetchPeope})(PeopleSection)