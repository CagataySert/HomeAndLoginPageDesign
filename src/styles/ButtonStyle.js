import {StyleSheet,Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    button: {
        width: width * 0.8,
        height: 40,
        backgroundColor: '#129793',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    }
});