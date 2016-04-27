import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGroups} from '../../actions/index';
// import {Link} from 'react-router';

class GroupSection extends Component {
    componentWillMount() {
        this.props.fetchGroups(this.props.params.id);
    }

    render() {
        console.log(this.props);
        return(
            <div>Groups Section</div>
        );
    }
}

function mapStateToProps(state) {
    return {groups: state.meetUp.groups}
}

export default connect(mapStateToProps, {fetchGroups})(GroupSection);