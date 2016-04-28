import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../../actions/index';
import {Link} from 'react-router';



class PeopleSection extends Component {
  componentWillMount() {
    this.props.fetchPeople(this.props.params.group_name, this.props.params.event_id);
  }

  renderPeople() {
    return this.props.people.data.map((person) => {
      return (
        <li className="list-group-item" key={person.id}>
            {person.name}
        </li>
      )
    })
  }

  render() {
    const {people} = this.props;

    if(!people.data) {
      return <img src="https://www4.parinc.com/images/loading/loading_bar.gif"/>
    } else if (people.data) {
      return (
        <div>People
          <ul>
            {this.renderPeople()}
          </ul>
        </div>
      );
    }

  }
}


function mapStateToProps(state) {
  return {people: state.meetUp.people}
}

export default connect(mapStateToProps, {fetchPeople})(PeopleSection);