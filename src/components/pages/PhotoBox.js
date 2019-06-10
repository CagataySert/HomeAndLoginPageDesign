import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


const { width, height } = Dimensions.get('window');

export default class PhotoBox extends Component {

    state = {
        isLiked: false
    }

    lastTap = null;


    handleDoubleTap = async (photoId) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            await this.setState({ isLiked: !this.state.isLiked });
            this.props.handleLikePhoto(photoId, this.state.isLiked);
        } else {
            this.lastTap = now;
        }
    }

    render() {
        const userData = this.props.userData;
        console.log('asdas', this.props.photoUrl, this.props.photoId);

        return (

            <View style={{ height: height * 0.9, backgroundColor: '' }}>

                <View style={{ flex: 1.25, flexDirection: 'row', backgroundColor: '', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>

                    <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 7 }}
                            source={{ uri: 'https://galeri13.uludagsozluk.com/633/sozluk-yazarlarinin-profil-resmi_1363249.png' }}
                        />

                        <Text style={{ padding: 10 }}>
                            {userData.firstName} {userData.lastName}
                        </Text>
                    </View>


                    <View style={{ flex: 2, backgroundColor: '', justifyContent: 'center', alignItems: 'flex-end', padding: 10 }}>
                        <Text>2d</Text>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => this.handleDoubleTap(this.props.photoId)}>
                    <View style={{ flex: 7.5, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Image
                            style={{ flex: 1 }}
                            source={{ uri: this.props.photoUrl }}
                        />
                    </View>
                </TouchableWithoutFeedback >


                <View style={{ flex: 1.25, flexDirection: 'row', backgroundColor: '' }}>

                    <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon style={{ marginLeft: 10 }} size={20} name='heart' solid={this.state.isLiked} color={this.state.isLiked ? 'red' : 'black'} />
                        <Icon style={{ marginLeft: 10 }} size={20} name='comment' color='black' />
                        <Icon style={{ marginLeft: 10 }} size={20} name='share' color='black' />
                    </View>

                    <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 7, justifyContent: 'center' }}>
                        <Icon style={{ marginLeft: 7, marginRight: 5 }} size={20} name='ellipsis-h' color='black' />
                    </View>

                </View>
            </View>

        )
    }
}

