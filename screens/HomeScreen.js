import React, { useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {navigate} from '../navigation/NavigationUtils';
import {
  REGULATIONS_SCREEN,
  QUIZ_SCREEN,
  SHOW_REGULATIONS_SCREEN_STORAGE,
} from '../Constants';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.shouldShowRegulationsScreen().then(shouldShow => {
      if (shouldShow) {
        navigate(REGULATIONS_SCREEN);
      }
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  shouldShowRegulationsScreen = async () => {
    try {
      const showRegulationsScreen = await AsyncStorage.getItem(
        SHOW_REGULATIONS_SCREEN_STORAGE,
      );
      return showRegulationsScreen === null;
    } catch (e) {
      return true;
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>HomeScreen</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate(QUIZ_SCREEN)}>
            <Text style={styles.buttonText}>QuizScreen</Text>
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

export default HomeScreen;
