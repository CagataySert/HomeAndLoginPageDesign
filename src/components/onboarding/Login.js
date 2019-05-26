import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native'
import Logo from '../Logo';
import Input from '../Input';
import Button from '../Button';
import styles from '../../styles/LoginStyle';
import firebase from 'react-native-firebase';

class Login extends Component {
    state={
        email: '',
        password: ''
    }

    handleInputTextChange = (inputName,text) => {
        this.setState({
            [inputName]: text
        });        
    }

    handleLoginButton = () => {
        console.log('çalıştı');
    }

    handleCreateAccountButton= () => {
        console.log('createNewAccount');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo />
                </View>


                <View style={styles.login}>
                    <View style={styles.welcomeView}>
                        <Text style={styles.welcomeText}>WELCOME</Text>
                    </View>

                    <View style={styles.inputsView}>
                        <Input handleTextChange={this.handleInputTextChange} inputName='Email' />
                        <Input handleTextChange={this.handleInputTextChange} inputName='Password' />
                    </View>
                    
                    <View style={styles.forgotPasswordAlignView}>
                        <View style={styles.forgotPasswordView}>
                            <Text style={styles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </View>
                    </View>

                    <View style={styles.buttonView}>
                        <Button handleLoginButton={this.handleLoginButton} buttonName='SIGN IN' />
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={this.handleCreateAccountButton}
                        style={styles.createAccountButton}
                    >
                        <Text style={styles.createAccountText}>Create new account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login;