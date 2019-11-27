import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {navigate} from '../navigation/NavigationUtils';

class QuizScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>QuizScreen</Text>
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

export default QuizScreen;