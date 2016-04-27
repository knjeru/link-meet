import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/index';
// import {Link} from 'react-router';

class EventSection extends Component {
    componentWillMount() {
        this.props.fetchEvents(this.props.params.id, this.props.params.name)
    }

  render() {
      console.log(this.events);
      return(
          <div>Events Section</div>
      );
  }
}

function mapStateToProps(state) {
    return {events: state.meetUp.events}
}

export default connect(mapStateToProps, {fetchEvents})(EventSection);