import {StyleSheet,Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    Input:{
        width: width * 0.8,
        height: 40,
        borderWidth: 1,
        borderColor: '#cfd0d1',
        borderBottomColor: '#cfd0d1',
        backgroundColor: '#f5f6f7',
        fontSize: 12
    }
});