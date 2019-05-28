import React, { Component } from 'react'
import { TextInput, Dimensions, View, StyleSheet } from 'react-native'
import styles from '../../styles/RegisterInputStyle';

const { width } = Dimensions.get('window');

export default class RegisterInputs extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    handleChangeText = async (inputName, data) => {
        await this.setState({
            [inputName]: data
        });
        this.props.triggerParentUpdate(this.state);
    }

    render() {
        return (
            <View style={styles.inputBox}>

                <View style={styles.firstRow}>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(text) => this.handleChangeText('firstName', text)}
                        value={this.state.firstName}
                        placeholder='First Name'
                    />

                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(text) => this.handleChangeText('lastName', text)}
                        value={this.state.lastName}
                        placeholder='Last Name'
                    />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.handleChangeText('userName', text)}
                    value={this.state.userName}
                    placeholder='Username'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.handleChangeText('email', text)}
                    value={this.state.email}
                    placeholder='Email Address'
                />

                <TextInput
                    style={styles.passwordInput}
                    onChangeText={(text) => this.handleChangeText('password', text)}
                    value={this.state.password}
                    placeholder='Password'
                />
            </View>
        )
    }
}

