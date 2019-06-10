import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/PhotoActions';
import Seperator from '../../components/Seperator';
import PhotoBox from './PhotoBox';
import { changePhotoLikeStatus } from '../../actions/PhotoActions';


class Home extends Component {

  state = {
    photosUrlArray: [],
    loading: false
  }

  componentWillMount() {
    this.props.getPhotos();
  }

  handleLikePhoto = (photoId, isLiked) => {
    console.log(photoId, isLiked);
    this.props.changePhotoLikeStatus(photoId, isLiked);
  }

  render() {
    const userData = this.props.user;
    return (
      this.props.loading
        ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='' />
        </View>
        :
        <FlatList
          data={this.props.photosUrlArray}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={Seperator}
          renderItem={({ item }) =>
            <PhotoBox photoUrl={item.url} photoId={item.id} userData={userData} handleLikePhoto={this.handleLikePhoto} />
          }
        />
    );
  }
}

const mapStateToProps = ({ authResponse, photoResponse }) => {
  console.log('HOME AUTH:', authResponse.data);
  console.log('HOME PHOTO:', photoResponse);


  return {
    user: authResponse.data,
    photosUrlArray: photoResponse.data,
    loading: photoResponse.loading
  };
}


export default connect(mapStateToProps, { getPhotos, changePhotoLikeStatus })(Home);