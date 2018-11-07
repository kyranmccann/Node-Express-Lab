import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';
import { Post } from '../components';

class PostView extends React.Component {


  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.props.fetchPostById(id);
  }

  render(){
    if (this.props.fetchingPosts) {
      return (
        <div className='loading'>
          <h2>Loading post...</h2>
        </div>
        )
    }
    console.log('in post view', this.props.activePost);
    const post = this.props.activePost;
    console.log(post)
    return(
      <Post post={post} history={this.props.history}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePost: state.postsReducer.activePost,
    fetchingPosts: state.postsReducer.fetchingPosts
  }
}
export default connect(
  mapStateToProps,
  {
    fetchPostById
  }
)(PostView);
