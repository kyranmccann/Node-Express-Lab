import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Form from './Form';

import { deletePost, guessAnswer } from '../actions';


class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    }
  }
delete = id => {
    this.props.deletePost(id);
      this.props.history.push('/');
      // window.location.reload();
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }))
  }

  editPost = post => {
    const id = this.props.post.id;
    axios
      .put(`http://localhost:9000/api/posts/${id}`, post)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
      this.setState({
        isEditing: false,
      })
  }

  render() {
    return (
      <div className='post-container'>
        <div className='buttons'>
          <div className='button delete-button' onClick={() => (this.delete(this.props.post.id))}>
            <i className="fas fa-trash"/>
          </div>
          <div className='button edit-button' onClick={() => (this.toggleEdit())}>
            <i className="fas fa-pen-nib"/>
          </div>
        </div>
        <h3>{this.props.post.title}</h3>
      <p>{this.props.post.contents}</p>
    {this.state.isEditing && <Form post={this.props.post} submit={this.editPost} history={this.props.history}/>}
      </div>
    )
  }
}


export default connect(
  null,
  {
    deletePost, guessAnswer
  }
)(Post);
