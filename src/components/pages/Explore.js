import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import Button from '../Button';
import ImagePicker from 'react-native-image-picker';
import { uploadPhoto } from '../../actions/PhotoActions';
import { connect } from 'react-redux';



class Explore extends Component {

  state = {
    photoUri: null
  }

  handleAddPhotoBUtton = () => {
    const options = {
      title: 'Select Photo',
      noData: true,
      quality: 0.7
    };

    ImagePicker.showImagePicker(options, (response) => {
      const uri = response.uri;
      if (uri) {
        this.setState({
          photoUri: uri
        });
      }
    });
  }

  handleUploadPhotoButton = () => {
    const uri = this.state.photoUri;
    this.props.uploadPhoto(uri);
    this.setState({
      photoUri: null
    });
  }

  render() {
    const { photoUri } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.props.loading ?
            <ActivityIndicator size="large" color="#129793" />
            :
            photoUri != null
              ?
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: photoUri }} style={{ height: 300, width: 300, marginBottom: 20 }} />
                <Button handleButton={this.handleUploadPhotoButton} buttonName='Upload Photo' />
              </View>
              :
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }}> Please Select a Photo! </Text>
                <Button handleButton={this.handleAddPhotoBUtton} buttonName='Select a Photo' />
              </View>
        }


      </View>
    );
  }
}


const mapStateToProps = ({ photoResponse }) => {
  return { loading: photoResponse.loading };
}


export default connect(mapStateToProps, { uploadPhoto })(Explore);

