import {
    POSTS_REQUEST,
    POSTS_REQUEST_SUCCESS,
    POSTS_REQUEST_FAILURE
} from './../actions/actionType';

const initState = {
    posts: null,
    error: null,
    loading: false
};

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                error: null,
                loading: false
            }
        case POSTS_REQUEST_FAILURE:
            return {
                ...state,
                error: action.payload,
                posts: null,
                loading: false
            }
        default:
            return state;
    }
}

export default postReducer;