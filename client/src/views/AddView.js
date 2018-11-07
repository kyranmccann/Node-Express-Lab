import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import { addPost } from '../actions';
import { Form } from '../components';


class AddView extends React.Component{

  addPost = post => {
    console.log('addform props', this.props);
    this.props.addPost(post)
    // axios
    //   .post('http://localhost:9000/api/posts', post)
    //   .then(response => {
    //     this.props.saveHelper(response.data)
    //   })
    //   .catch(error => console.log(error));

  }
  render(){
    return (
      <div className='add-container'>
      <h2>Add a quote to our list</h2>
        <Form add='true' submit={this.addPost} history={this.props.history}/>
      </div>
    )
  }
}
export default connect(
  null,
  {
    addPost
  }
)(AddView);
