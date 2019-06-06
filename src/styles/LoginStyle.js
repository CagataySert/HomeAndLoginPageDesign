import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f7'
    },
    container: {
        flex: 1,
    },
    logo: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    login: {
        flex: 5,
    },
    welcomeView: {
        alignItems: 'center',
        marginTop: 40
    },
    welcomeText: {
        fontSize: 17,
        color: '#5b5a5a',
        fontFamily: 'Euphemia UCAS',
    },
    inputsView: {
        alignItems: 'center',
        marginTop: 25,
    },
    forgotPasswordAlignView: {
        alignItems: 'center',
        marginTop: 5
    },
    forgotPasswordView: {
        width: width * 0.8,
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#5b5a5a'
    },
    buttonView: {
        marginTop: 15,
        alignItems: 'center'
    },
    footer: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    createAccountButton: {
        marginBottom: 15
    },
    createAccountText: {
        fontSize: 14,
        color: 'orange',
    }
});