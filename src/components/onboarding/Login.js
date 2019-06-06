import React, { Component } from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import Logo from '../Logo';
import Input from './LoginInput';
import Button from '../Button';
import styles from '../../styles/LoginStyle';
import { Actions } from 'react-native-router-flux';
import { login } from '../../actions/AuthActions';
import { connect } from 'react-redux';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputTextChange = (inputName, text) => {
        this.setState({
            [inputName]: text
        });
    }

    handleLoginButton = () => {
        this.props.login(this.state);
    }

    handleCreateAccountButton = () => {
        Actions.push('register');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {
                    this.props.loading
                        ?
                        <ActivityIndicator size='large' color='green' />
                        :
                        <View style={styles.container}>
                            <View style={styles.logo}>
                                <Logo />
                            </View>

                            <View style={styles.login}>
                                <View style={styles.welcomeView}>
                                    <Text style={styles.welcomeText}>WELCOME</Text>
                                </View>

                                <View style={styles.inputsView}>
                                    <Input handleTextChange={this.handleInputTextChange} inputName='email' />
                                    <Input handleTextChange={this.handleInputTextChange} inputName='password' />
                                </View>

                                <View style={styles.forgotPasswordAlignView}>
                                    <View style={styles.forgotPasswordView}>
                                        <Text style={styles.forgotPasswordText}>
                                            Forgot Password?
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button handleButton={this.handleLoginButton} buttonName='SIGN IN' />
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
                }
            </View>
        )
    }
}

const mapStateToProps = ({ authResponse }) => {
    return { loading: authResponse.loading };
}

export default connect(mapStateToProps, { login })(Login);