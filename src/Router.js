import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Router, Scene, Tabs, Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './components/onboarding/Login';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Likes from './components/pages/Likes';
import Profile from './components/pages/Profile';
import Register from './components/onboarding/Register';

const iconn = (name, data) => {
  console.log(data.focused);
  return <Icon color={data.focused ? 'blue' : 'black'} name={name} size={25} />
}
export default class componentName extends Component {


  render() {
    return (
      <Router>
        <Stack hideNavBar='true' key="root">

          {/* <Scene
            key='login'
            title='Login'
            component={Login}
            hideNavBar='true'
            initial
          />

          <Scene
            key='register'
            title='Register'
            component={Register}
            hideNavBar='true'
          /> */}

          <Tabs key="main" tabBarStyle={[styles.tabBar]} showLabel={false}>
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
              component={Profile}
              initial
            />
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
  homeNavBar: {
    backgroundColor: 'ghostwhite'
  },
  navigationBarTitleStyle: {
    color: 'white',
  },
  navBar: {
  }
};
