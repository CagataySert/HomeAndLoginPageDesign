import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        width: width * 0.8,
        marginBottom: 55
    },
    iconViewStyle: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#cfd0d1',
        height: 55
    },
    inputView: {
        flex: 8.5,
        height: 55,
        borderWidth: 1,
        borderColor: '#cfd0d1',
    },
    Input: {
        marginLeft: 7,
        backgroundColor: '#f5f6f7',
        fontSize: 18
    }
});