import React,  {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../../actions/index';
// import {Link} from 'react-router';

class CategorySection extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    render() {
        console.log(this.categories);
        return(
          <div>Category Section</div>
        );
    }
}

function mapStateToProps(state) {
    return {categories: state.meetUp.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategorySection);