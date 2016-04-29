import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPeople, fetchUserPerson} from '../../actions/index';
import {Link} from 'react-router';


// add button that will save the select person to the user model

class PeopleSection extends Component {
  componentWillMount() {
    this.props.fetchPeople(this.props.params.group_name, this.props.params.event_id);
  }

  renderPeople() {
    return this.props.people.map((person) => {
      return (
          <li className="list-group-item" key={person.id}>
            <Link to={this.props.params.group_name + '/events/' + this.props.params.event_id + '/' + person.id}>
              <div>{person.name} </div>
              <div>
              <img src={person.photo.thumb_link}/>
                </div>
            </Link>
          </li>
      )
    })
  }

  render() {
      console.log(this.props.people);
    return (
        <div>People
          <ul>
            {this.renderPeople()}
          </ul>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {people: state.meetUp.people}
}

export default connect(mapStateToProps, {fetchPeople, fetchUserPerson})(PeopleSection);