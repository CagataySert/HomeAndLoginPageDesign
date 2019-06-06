import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    REGISTER_START
} from './types';



export const login = ({ email, password }) => {
    return async dispatch => {
        try {
            dispatch({ type: LOGIN_START });
            const userData = await firebase.auth().signInWithEmailAndPassword(email, password);
            const userId = userData.user._user.uid;


            const userDetailData = await firebase.firestore().collection('users').doc(userId).get();

            dispatch({ type: LOGIN_SUCCESS, payload: userDetailData._data });

            Actions.reset('main');
        }
        catch (error) {
            console.log(error.message);
            dispatch({ type: LOGIN_FAILED });

        }
    }
}



export const postRegisterData = ({ email, password, userName, firstName, lastName }) => {
    return dispatch => {
        dispatch({ type: REGISTER_START });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                const id = user.user._user.uid;
                dispatch({ type: REGISTER_SUCCESS });

                firebase.firestore().collection('users').doc(id).set({
                    firstName,
                    lastName,
                    userName,
                    email,
                    password
                }).then(success => {
                    console.log('Kayıt Başarılı: ', success);
                }).catch(error => {
                    console.log('Kayıt Başarısız: ', error);
                    dispatch({ type: REGISTER_FAILED });
                })
                Actions.pop();
            }).catch(error => {
                console.log('Register Başarısız: ', error);
            });
    }
}