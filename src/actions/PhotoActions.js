import { GET_PHOTO, UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAILED } from './types';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';


export const uploadPhoto = (uri, contentType = 'image/jpeg') => {
    return async dispatch => {
        try {
            const userId = firebase.auth().currentUser.uid;
            dispatch({ type: UPLOAD_START });

            const snapshot = await firebase.storage().ref(`/profiles/${userId}`).put(uri, { contentType });
            dispatch({ type: UPLOAD_SUCCESS, payload: snapshot.downloadURL });
            Actions.pop();
        }
        catch (error) {
            dispatch({ type: UPLOAD_FAILED });
            console.log(error.message);
        }
    }
}