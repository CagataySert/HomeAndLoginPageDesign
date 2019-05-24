import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Router, Scene, Tabs,Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './components/Login';
import Home from './components/Home';
import Explore from './components/Explore';
import Likes from './components/Likes';
import Profile from './components/Profile';


const iconn = (name, data) => {
  console.log(data.focused);
  return <Icon color={data.focused ? 'blue' : 'black'} name={name} size={25} />
}
export default class componentName extends Component {


  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.titleStyle}
      >
        <Stack key="root">

          <Scene
            title='Login'
            component={Login}
            hideNavBar='true'
            initial
          />

          <Tabs key="main" tabBarStyle={styles.tabBar} showLabel={false}>
            <Scene key="home"
              title="Instagram"
              icon={(data) => iconn('home', data)}
              component={Home}
            />
            <Scene key="explore"
              title="Keşfet"
              icon={(data) => iconn('search', data)}
              component={Explore}
            />
            <Scene key="plus"
              icon={(data) => iconn('plus', data)}
              title={'Beğeniler'}

              component={() => {
                console.log('Olalala');
                return null
              }
              }
              tabBarOnPress={() => console.log('asasd')}
            />

            <Scene key="likes"
              icon={(data) => iconn('heart', data)}

              title={'Beğeniler'}
              component={Likes} />


            <Scene key="profile"
              icon={(data) => iconn('user', data)}
              title={'Profil'}
              component={Profile} />
          </Tabs>
      </Stack>
      </Router>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 0.3,
    backgroundColor: 'ghostwhite',
  },
  navigationBarStyle: {
    backgroundColor: 'red',
  },
  navigationBarTitleStyle: {
    color: 'white',
  },
  navBar: {
  }
};
