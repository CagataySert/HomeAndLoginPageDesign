import { combineReducers } from 'redux';
import PostsReducers from './PostsReducers';
import AuthReducers from './AuthReducers';
import PhotoReducers from './PhotoReducers';


export default combineReducers({
    postsResponse: PostsReducers,
    authResponse: AuthReducers,
    photoResponse: PhotoReducers
});