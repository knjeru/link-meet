import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/index';

class UserSection extends Component {
    componentWillMount() {
        this.props.fetchUser(localStorage.getItem('id'));
    }

    renderMinderNotes() {
        if (!this.props.user.people) {
            return (
                <img src="https://www4.parinc.com/images/loading/loading_bar.gif"/>
            )
        } else {
            return this.props.user.people.map((minder) => {
                return (
                    <li className="list-group-item" key={minder._id}>
                        <p>{minder.name}</p>
                        <img src={minder.photoUrl}/>
                        <p>{minder.notes}</p>
                    </li>
                )
            })
        }
    }

    render() {
        return(
            <div>
                <h3>My Minders</h3>
                <ul>
                    {this.renderMinderNotes()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {user: state.user.user}
}

export default connect(mapStateToProps, {fetchUser})(UserSection);