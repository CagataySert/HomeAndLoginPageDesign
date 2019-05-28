import { combineReducers } from 'redux';
import PostsReducers from './PostsReducers';
import AuthReducers from './AuthReducers';

export default combineReducers({
    postsResponse: PostsReducers,
    authResponse: AuthReducers
});