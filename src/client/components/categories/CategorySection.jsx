import React,  {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../../actions/index';
import {Link} from 'react-router';

class CategorySection extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        return this.props.categories.map((category) => {
            return (
                <li className="list-group-item cateCol" key={category.id}>
                    <Link to={category.id + '/groups'}>
                        <p>{category.name}</p>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right catBox">
                    <h3 className="title">Select a category</h3>
                    <ul className="list-group cat">
                        {this.renderCategories()}
                    </ul>
                </div>
            </div>
        );
    }
}

CategorySection.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return {categories: state.meetUp.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategorySection);