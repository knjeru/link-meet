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
                    <li className="list-group-item userCol" key={minder._id}>
                        <h2>{minder.name}</h2>
                        <img src={minder.photoUrl}/>
                        <p>{minder.notes}</p>
                    </li>
                )
            })
        }
    }

    render() {
        return(
            <div className="userBox">
                <h3 className="title">My Minders</h3>
                <ul className="user">
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