import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';
export const POST_POST_FAILURE = 'POST_POST_FAILURE';

export const PUT_POST_SUCCESS = 'PUT_POST_SUCCESS';
export const PUT_POST_FAILURE = 'PUT_POST_FAILURE';

export const FETCH_POST_ID = 'FETCH_POST_ID';
export const FETCH_POST_ID_SUCCESS = 'FETCH_POST_ID_SUCCESS';
export const FETCH_POST_ID_FAILURE = 'FETCH_POST_ID_FAILURE';

const url = 'http://localhost:9000/api/posts';

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS });
  axios
    .get(url)
    .then(response => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: error })
    })
}

export const addPost = post => dispatch => {
  axios
    .post(url, post)
    .then(response => {
      dispatch({ type: POST_POST_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: POST_POST_FAILURE, payload: error })
    })
}

export const guessAnswer = (id, post) => dispatch => {
  axios
    .put(`${url}/${id}`)
    .then(response => {
      dispatch({ type: PUT_POST_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: PUT_POST_FAILURE, payload: error })
    })
}

export const fetchPostById = id => dispatch => {
  dispatch({ type: FETCH_POST_ID});
  axios
    .get(`${url}/${id}`)
    .then(response => {
      dispatch({ type: FETCH_POST_ID_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_POST_ID_FAILURE, payload: error })
    })
}

export const deletePost = id => dispatch => {
  axios
    .delete(`${url}/${id}`)
    .then(response => {
      dispatch({ type: DELETE_POST_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: DELETE_POST_FAILURE, payload: error })
    })
}
