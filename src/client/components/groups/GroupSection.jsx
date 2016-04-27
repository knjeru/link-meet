import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGroups} from '../../actions/index';
import {Link} from 'react-router';

class GroupSection extends Component {
    componentWillMount() {
        this.props.fetchGroups(this.props.params.id);
    }

    renderGroups() {
        console.log(this.props.groups.data)
        return this.props.groups.data.map((group) => {
            return (
                <li key={group.id} className="list-group-item">
                    <Link to={group.urlname + '/events'} >
                        {group.name}
                    </Link>
                </li>
            )
        })
    }

    render(){
        const {groups} = this.props;

        if(!groups.data) {
            return <img src="https://www4.parinc.com/images/loading/loading_bar.gif"/>
        } else if (groups.data) {
            return (
                <div>
                    <h3>Select a Group</h3>
                    <ul className="list-group">
                        {this.renderGroups()}
                    </ul>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {groups: state.meetUp.groups}
}

export default connect(mapStateToProps, {fetchGroups})(GroupSection)