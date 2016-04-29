import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../../actions/index';
import {Link} from 'react-router';

class PeopleSection extends Component {
    componentWillMount() {
        this.props.fetchPeople(this.props.params.group_name, this.props.params.event_id);
    }

    onClick() {
        this.props.history.goBack();
    }

    renderPeople() {
        if(!this.props.people.length) {
            return (
                <div>
                    <p>Looks like there aren't any attendees yet for this event!</p>
                    <button onClick={this.onClick.bind(this)}>Go back to all events!</button>
                </div>
            )
        } else {
            return this.props.people.map((person) => {
                return (
                    <li className="list-group-item" key={person.id}>
                        <Link to={'person/' + person.id}>
                            <div>{person.name} </div>
                            <div>
                                <img src={person.photo.thumb_link}/>
                            </div>
                        </Link>
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>
                    Go Back!
                </button>
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

export default connect(mapStateToProps, {fetchPeople})(PeopleSection);