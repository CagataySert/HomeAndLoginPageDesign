import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f6f7',
        flex: 1,
    },
    caption: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        fontSize: 25,
        color: '#5b5a5a',
        marginLeft: 20,
        marginTop: 20
    },
    captionText: {
        color: '#5b5a5a',
        fontSize: 20,
        fontWeight: '400'
    },
    register: {
        flex: 5,
        alignItems: 'center'
    },
    conditionsView: {
        alignItems: 'center',
        marginTop: 15
    },
    conditionsText: {
        color: '#5b5a5a'
    },
    conditionsLinkView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    conditionsLink: {
        color: 'orange'
    },
    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
