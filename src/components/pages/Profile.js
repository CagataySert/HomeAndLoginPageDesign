import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Seperator from '../Seperator';


export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <View style={styles.profilePictureSection}>
            <Image
              style={styles.profilePicture}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuAG7I59gnXky-3gErGMBDhiB1jaZA2xF65pbxd9SIckneWmn' }}
            />
          </View>

          <View style={styles.followSection}>
            <View style={styles.followTopSection}>

              <View style={styles.post}>
                <Text style={styles.activeText}>
                  4212
                </Text>
                <Text style={styles.passiveText}>
                  gönderi
                </Text>
              </View>

              <View style={styles.followers}>
                <Text style={styles.activeText}>
                  4212
                </Text>
                <Text style={styles.passiveText}>
                  takipçi
                </Text>
              </View>

              <View style={styles.follows}>
                <Text style={styles.activeText}>
                  4212
                </Text>
                <Text style={styles.passiveText}>
                  takip
                </Text>
              </View>
            </View>

            <View style={styles.editSection}>
              <TouchableOpacity
                onPress={console.log('asd')}
                style={styles.editButton}
              >
                <Text style={styles.activeText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.profileDescription}>
          <View style={styles.userName}>
            <Text style={styles.activeText}>
              Çağatay Sert
            </Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.activeSmallText}>
              Beşiktaş - YTU - Kodluyoruz - ProgramlamaBeşiktaş - YTU - Kodluyoruz - ProgramlamaBeşiktaş - YTU - Kodluyoruz - ProgramlamaBeşiktaş - YTU - Kodluyoruz - Programlama
            </Text>
          </View>

        </View>

        <Seperator />

        <View style={styles.photos}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topMenu: {
    flex: 2,
    flexDirection: 'row',
  },
  profilePictureSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePicture: {
    borderWidth: 1,
    borderColor: '#cfd0d1',
    width: 90,
    height: 90,
    borderRadius: 45
  },
  followSection: {
    flex: 7,
  },
  followTopSection: {
    flex: 5,
    flexDirection: 'row',
  },
  post: {
    flex: 3.33,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    color: 'black',
    fontSize: 20
  },
  activeSmallText: {
    color: '#696969',
    fontSize: 16,
  },
  passiveText: {
    color: '#cfd0d1',
    fontSize: 16
  },
  followers: {
    flex: 3.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  follows: {
    flex: 3.33,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editSection: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    backgroundColor: '#EBECF0',
    flex: 0.9,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    flex: 2,
    marginLeft: 10
  },
  description: {
    flex: 8,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },











  profileDescription: {
    flex: 2,
  },
  photos: {
    flex: 6,
  }

})