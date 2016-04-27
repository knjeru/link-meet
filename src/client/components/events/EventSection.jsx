import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/index';
import {Link} from 'react-router';



class EventSection extends Component {

    componentWillMount() {
        this.props.fetchEvents(this.props.params.group_name);
    }

    renderEvents() {
        return this.props.events.data.map((event) => {
            return (
                <li className="list-group-item" key={event.id}>
                    <Link to={this.props.params.group_name + '/events/' + event.id + '/people'}>
                        {event.name}
                    </Link>
                </li>
            )
        })
    }

    render() {
        console.log(this.props.events);
        const {events} = this.props;

        if(!events.data) {
            return <img src="https://www4.parinc.com/images/loading/loading_bar.gif"/>
        } else if (events.data) {
            return (
                <div>Events
                    <ul>
                        {this.renderEvents()}
                    </ul>
                </div>
            );
        }

    }
}


function mapStateToProps(state) {
    return {events: state.meetUp.events}
}

export default connect(mapStateToProps, {fetchEvents})(EventSection);