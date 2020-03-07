import axios from 'axios';

import {
    POSTS_REQUEST,
    POSTS_REQUEST_SUCCESS,
    POSTS_REQUEST_FAILURE
} from './actionType';

const postsRequest = () => ({
    type: POSTS_REQUEST
});

const postsSuccess = (posts) => ({
    type: POSTS_REQUEST_SUCCESS,
    payload: posts
});

const postsFailure = (err) => ({
    type: POSTS_REQUEST_FAILURE,
    payload: err
})

export const postsAsync = (dispatch) => {
    dispatch(postsRequest());
    axios.get('http://localhost:3001/posts')
        .then(res => {
            dispatch(postsSuccess(res.data));
        })
        .catch(err => {
            dispatch(postsFailure(err));
        });
}