import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_START } from './types';



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