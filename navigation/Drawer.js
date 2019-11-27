import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {hideDrawer, navigate} from './NavigationUtils';

class Drawer extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Drawer</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate('QuizScreen')}>
            <Text style={styles.buttonText}>QuizScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate('HomeScreen')}>
            <Text style={styles.buttonText}>HomeScreen</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    margin: 12,
    padding: 16,
    borderRadius: 24,
  },
});

export default Drawer;