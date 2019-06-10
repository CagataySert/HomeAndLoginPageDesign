import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILED,
    UPLOAD_START, UPLOAD_SUCCESS,
    UPLOAD_FAILED,
    CHANGE_PHOTO_LIKE_STATUS
} from './types';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import { uniqueIdGenerator } from '../components/UniqueIdGenerator';

export const uploadPhoto = (uri, contentType = 'image/jpeg') => {
    return async dispatch => {
        try {
            Actions.pop();
            dispatch({ type: UPLOAD_START });

            const userId = firebase.auth().currentUser.uid;
            const photoId = await uniqueIdGenerator();

            const snapshot = await firebase.storage().ref()
                .child(`/photos/${userId}`)
                .child(photoId)
                .put(uri, { contentType });

            await firebase.firestore()
                .collection('users').doc(userId)
                .collection('photos').doc(photoId)
                .set({ url: snapshot.downloadURL, isLiked: false });

            dispatch({ type: UPLOAD_SUCCESS, payload: { url: snapshot.downloadURL, id: photoId, isLiked: false } });
        }
        catch (error) {
            dispatch({ type: UPLOAD_FAILED });
            console.log(error.message);
        }
    }
}

export const getPhotos = () => {
    return async dispatch => {
        try {
            dispatch({ type: GET_PHOTOS_START });

            const userId = firebase.auth().currentUser.uid;
            const photos = await firebase.firestore()
                .collection('users').doc(userId)
                .collection('photos').get();

            let photosUrlArray = [];
            await photos.docs.map(doc => photosUrlArray.push({ id: doc.id, url: doc._data.url }));

            dispatch({ type: GET_PHOTOS_SUCCESS, payload: photosUrlArray });
        }
        catch (error) {
            dispatch({ type: GET_PHOTOS_FAILED, payload: error.message });
            console.log(error.message);
        }
    }
}

export const changePhotoLikeStatus = (photoId, isLiked) => {
    return dispatch => {
        try {
            const userId = firebase.auth().currentUser.uid;
            const response = firebase.firestore()
                .collection('users').doc(userId)
                .collection('photos').doc(photoId)
                .update({
                    isLiked
                });
            console.log(response);

            dispatch({ type: CHANGE_PHOTO_LIKE_STATUS });
        }
        catch (error) {
            console.log(error.message);
        }
    }
}