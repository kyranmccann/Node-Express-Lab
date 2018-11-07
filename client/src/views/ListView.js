import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostList } from '../components';

import { fetchPosts } from '../actions';

class ListView extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.fetchingPosts) {
      return (
        <div className='loading'>
          <h2>Loading posts...</h2>
        </div>
      )
    }
    return (
    <div className='list-wrapper'>
      <Link to='/add' className='button add-button'>
        Add a quote
      </Link>
      <PostList posts={this.props.posts} />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts,
    fetchingPosts: state.postsReducer.fetchingPosts,
    error: state.postsReducer.error,
  }
}
export default connect(
  mapStateToProps,
  {
    fetchPosts,
  }
)(ListView);
