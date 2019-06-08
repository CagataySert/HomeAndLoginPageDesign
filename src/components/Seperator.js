import React from 'react'
import { View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const Seperator = () => {
    return (
        <View style={{
            height: 1,
            backgroundColor: '#CED0CE',
            width
        }}>
        </View>
    )
}

export default Seperator;
