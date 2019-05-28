import firebase from 'react-native-firebase';




export const postRegisterData = (data) => {
    return dispatch => {
        console.log('action', data.email, data.password);

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(user => console.log(user));
    }
}