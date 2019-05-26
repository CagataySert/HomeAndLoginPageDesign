import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Button from '../Button';
import RegisterInputs from './RegisterInputs';


const { width } = Dimensions.get('window');

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    handleBackButton = () => {
        console.log('çalıştı back');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    onPress={this.handleBackButton}
                >
                    <Text style={styles.backButton}>X</Text>
                </TouchableOpacity>
                <View style={styles.caption}>
                    <Text style={styles.captionText}> {`CREATE NEW \n    ACCOUNT`} </Text>
                </View>


                <View style={styles.register}>
                    <View style={styles.inputBox}>
                        <RegisterInputs />
                    </View>

                    <View style={styles.conditionsView}>
                        <Text style={styles.conditionsText}>By tapping "Sign Up" you agree</Text>
                        <View style={styles.conditionsLinkView}>
                            <Text style={styles.conditionsText}>to the</Text>
                            <Text style={styles.conditionsLink}> terms & conditions</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Button buttonName='Create New Account' />
                </View>
            </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
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
        fontSize: 30,
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


export default Register;
