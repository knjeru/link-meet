import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGroups} from '../../actions/index';
import {Link} from 'react-router';

class GroupSection extends Component {
    componentWillMount() {
        this.props.fetchGroups(this.props.params.id);
    }

    renderGroups() {
        return this.props.groups.map((group) => {
            return (
                <li  key={group.id} className="list-group-item grpCol">
                    <Link to={group.urlname + '/events'} >
                        <p>{group.name}</p>
                    </Link>
                </li>
            )
        })
    }

    render(){
        console.log(this.props.groups)
        return (
            <div className="text-xs-right grpBox">
                <h3 className="title">Select a Group</h3>
                <ul className="list-group grp">
                    {this.renderGroups()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {groups: state.meetUp.groups}
}

export default connect(mapStateToProps, {fetchGroups})(GroupSection)