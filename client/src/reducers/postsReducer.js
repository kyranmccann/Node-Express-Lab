import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_ID,
  FETCH_POST_ID_SUCCESS,
  FETCH_POST_ID_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  POST_POST_SUCCESS,
  POST_POST_FAILURE,
  PUT_POST_SUCCESS,
  PUT_POST_FAILURE,
} from '../actions';

const initialState = {
  fetchingPosts: false,
  postsSaved: false,
  posts: [],
  error: null,
  points: 0,
  activePost: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        posts: [...action.payload]
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload
      };


    case DELETE_POST_SUCCESS:
      const deletedList = state.posts.filter(post =>
        post.id !== action.payload
      )
      return {
        ...state,
        posts: deletedList
      };

    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };


    case POST_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload[0]]
      };

    case POST_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    case FETCH_POST_ID:
    console.log('fetching post')
      return {
        ...state,
        fetchingPosts: true,
      }
    case FETCH_POST_ID_SUCCESS:
    console.log('found a post',  action.payload)
      return {
        ...state,
        fetchingPosts: false,
        activePost: action.payload[0]
      }

    case FETCH_POST_ID_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload,
      }

    case PUT_POST_SUCCESS:
      const editedList = state.posts.map(post => {
        if (post.id === action.payload.id) {
          return {...post, ...action.payload}
        } return post;
      })
      return {
        ...state,
        posts: editedList,
      };

    case PUT_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state;
  }
}
