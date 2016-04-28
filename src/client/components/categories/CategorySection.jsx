import React,  {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../../actions/index';
import {Link} from 'react-router';

class CategorySection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: localStorage.getItem('token')
        }
    }
    componentWillMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        return this.props.categories.data.map((category) => {
            return (
                <li className="list-group-item" key={category.id}>
                    <Link to={category.id + '/groups'}>
                        <p>{category.name}</p>
                    </Link>
                </li>
            )
        })
    }

    render() {
        if (!this.state.token) {
            return (
                <div>Go Home</div>
            )
        }
        if (this.state.token) {
            const {categories} = this.props;

            if (!categories.data) {
                return <img src="https://www4.parinc.com/images/loading/loading_bar.gif"/>
            } else if (categories.data) {
                return (
                    <div>
                        <div className="text-xs-right">
                            <h3>Select a category</h3>
                            <ul className="list-group">
                                {this.renderCategories()}
                            </ul>
                        </div>
                    </div>
                );
            }
        }
    }
}

function mapStateToProps(state) {
    return {categories: state.meetUp.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategorySection);