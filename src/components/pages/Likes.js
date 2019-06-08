import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Button, Text } from 'react-native';

export default class App extends Component {
  state = {
    users: ['asdasd', 'asdasaaaaaaa']
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={({ item }) =>
            <View>
              <Text>{item}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }

});
