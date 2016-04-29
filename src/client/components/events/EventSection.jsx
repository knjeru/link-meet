import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/index';
import {Link} from 'react-router';



class EventSection extends Component {

    componentWillMount() {
        this.props.fetchEvents(this.props.params.group_name);
    }

    onClick() {
        this.props.history.goBack();
    }

    renderEvents() {
        if (!this.props.events.length) {
            return (
              <div>
                  <p>No upcoming events were found for {this.props.params.group_name}!</p>
                  <button onclick={this.onClick.bind(this)}>Click here to choose a different group!</button>
              </div>
            )
        } else {
            return this.props.events.map((event) => {
                return (
                    <li className="list-group-item evtCol" key={event.id}>
                        <Link to={this.props.params.group_name + '/events/' + event.id}>
                            <p>{event.name}</p>
                        </Link>
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div className="text-xs-right evtBox">
                <div>
                    <button onClick={this.onClick.bind(this)}>
                       Go Back!
                    </button>
                </div>
                <ul className="list-group evt">
                    {this.renderEvents()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {events: state.meetUp.events}
}

export default connect(mapStateToProps, {fetchEvents})(EventSection);