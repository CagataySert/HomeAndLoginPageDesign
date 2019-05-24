import React, { Component } from 'react'
import { TextInput,StyleSheet, Dimensions } from 'react-native'
import styles from '../styles/Input';

export default class Input extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <TextInput
                style={styles.Input}
                onChangeText=
                    {
                        (text) => 
                            {
                                this.props.handleTextChange(this.props.inputName,text); 
                                this.setState({text})
                            }
                    }
                value={this.state.text}
                placeholder={this.props.inputName}
                placeholderTextColor='#979899'  
            />
        )
    }
}