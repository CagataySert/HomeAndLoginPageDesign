import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/PhotoActions';
import Seperator from '../../components/Seperator';


const { width, height } = Dimensions.get('window');

class Home extends Component {

  state = {
    photosUrlArray: [],
    loading: false
  }

  componentWillMount() {
    this.props.getPhotos();
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


              <View style={{ flex: 7.5, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                <Image
                  style={{ flex: 1 }}
                  source={{ uri: item }}
                />
              </View>

              <View style={{ flex: 1.25, flexDirection: 'row', backgroundColor: '' }}>

                <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center' }}>
                  <Icon style={{ marginLeft: 10 }} size={20} name='heart' color='black' />
                  <Icon style={{ marginLeft: 10 }} size={20} name='comment' color='black' />
                  <Icon style={{ marginLeft: 10 }} size={20} name='share' color='black' />
                </View>

                <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 7, justifyContent: 'center' }}>
                  <Icon style={{ marginLeft: 7, marginRight: 5 }} size={20} name='ellipsis-h' color='black' />
                </View>

              </View>
            </View>
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


export default connect(mapStateToProps, { getPhotos })(Home);