import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styles from '../../styles/LoginInputStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Input extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={styles.inputBox}>
                <View style={styles.iconViewStyle}>
                    <Icon name={this.props.inputName === 'password' ? 'lock' : 'envelope'} size={24} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.Input}
                        onChangeText=
                        {
                            (text) => {
                                this.props.handleTextChange(this.props.inputName, text);
                                this.setState({ text })
                            }
                        }
                        value={this.state.text}
                        placeholder={this.props.inputName}
                        placeholderTextColor='#979899'
                        secureTextEntry={this.props.inputName === 'password' ? true : false}
                    />
                </View>
            </View>
        )
    }
}