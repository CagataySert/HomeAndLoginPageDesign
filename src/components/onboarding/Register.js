import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Button from '../Button';
import RegisterInputs from './RegisterInputs';
import styles from '../../styles/RegisterStyle';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { postRegisterData } from '../../actions/AuthActions';

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
        Actions.pop();
    }

    handleRegisterButton = () => {
        this.props.postRegisterData(this.state);
    }

    updateState = (newState) => {
        this.setState({
            ...newState
        });
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                {
                    this.props.loading
                        ?
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <View style={{ flex: 9 }}>
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
                                    <RegisterInputs triggerParentUpdate={this.updateState} />
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
                                <Button handleButton={this.handleRegisterButton} buttonName='Create New Account' />
                            </View>
                        </View>
                }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = ({ authResponse }) => {
    console.log('register mapstateprops');

    console.log(authResponse);
    return { loading: authResponse.loading };
}

export default connect(mapStateToProps, { postRegisterData })(Register);
