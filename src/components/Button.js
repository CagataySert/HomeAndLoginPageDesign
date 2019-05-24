import React, { Component } from 'react'
import { TouchableOpacity,Dimensions, Text } from 'react-native'
import styles from '../styles/ButtonStyle';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.handleLoginButton}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{this.props.buttonName}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;
