import React, { Component } from 'react'
import { TextInput, Dimensions, View, StyleSheet } from 'react-native'


const { width } = Dimensions.get('window');

export default class RegisterInputs extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.inputBox}>

                <View style={styles.firstRow}>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(text) => this.setState({ firstName: text })}
                        value={this.state.firstName}
                        placeholder='First Name'
                    />

                    <TextInput
                        style={styles.nameInput}
                        onChangeText={(text) => this.setState({ lastName: text })}
                        value={this.state.lastName}
                        placeholder='Last Name'
                    />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ userName: text })}
                    value={this.state.userName}
                    placeholder='Username'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    placeholder='Email Address'
                />

                <TextInput
                    style={styles.passwordInput}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    placeholder='Password'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: width * 0.8,
    },
    firstRow: {
        flexDirection: 'row',
    },
    nameInput: {
        width: width * 0.4,
        height: 55,
        borderColor: '#cfd0d1',
        borderBottomColor: 'transparent',
        borderWidth: 1
    },
    input: {
        width: width * 0.8,
        height: 55,
        borderColor: '#cfd0d1',
        borderBottomColor: 'transparent',
        borderWidth: 1
    },
    passwordInput: {
        width: width * 0.8,
        height: 55,
        borderColor: '#cfd0d1',
        borderWidth: 1
    }
});