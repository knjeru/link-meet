import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../../actions/index';
import {Link} from 'react-router';

class PeopleSection extends Component {
  componentWillMount() {
    this.props.fetchPeople(this.props.params.group_name, this.props.params.event_id);
  }

  renderPeople() {
    return this.props.people.map((person) => {
      return (
          <li className="list-group-item peopleCol" key={person.id}>
            <Link to={'person/' + person.id}>
              <div>
                  <h2>{person.name}</h2>
              </div>
              <div>
                  <img src={person.photo.thumb_link}/>
              </div>
            </Link>
          </li>
      )
    })
  }

  render() {
    return (
        <div className="peopleBox">
          <ul className="people">
            {this.renderPeople()}
          </ul>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {people: state.meetUp.people}
}

export default connect(mapStateToProps, {fetchPeople})(PeopleSection);