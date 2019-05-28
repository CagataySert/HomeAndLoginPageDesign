import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');



export default styles = StyleSheet.create({
    inputBox: {
        width: width * 0.8,
    },
    firstRow: {
        flexDirection: 'row',
    },
    nameInput: {
        width: width * 0.4,
        height: 55,
        borderColor: '#cfd0d1',
        borderBottomColor: 'transparent',
        borderWidth: 1
    },
    input: {
        width: width * 0.8,
        height: 55,
        borderColor: '#cfd0d1',
        borderBottomColor: 'transparent',
        borderWidth: 1
    },
    passwordInput: {
        width: width * 0.8,
        height: 55,
        borderColor: '#cfd0d1',
        borderWidth: 1
    }
});