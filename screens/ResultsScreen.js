import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, RefreshControl} from 'react-native';
import QuizContext from '../QuizContext';
import {BASE_URL} from '../Constants';

const ResultsScreen = () => {
  useEffect(() => {
    fetchResults();
  }, []);

  const [resultsData, setResultsData] = useState();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchResults = () => {
    fetch(BASE_URL + 'results')
      .then(response => {
        setIsRefreshing(false);
        setResultsData(response.json().reverse());
      })
      .catch(reason => console.log(reason));
  };

  const createItem = item => {
    return (
      <View
        style={styles.resultContainer}
        key={Math.random() * 10000 * Math.random()}>
        <Text style={styles.resultText}>Nick: {item.nick}</Text>
        <Text style={styles.resultText}>Score: {item.score}</Text>
        <Text style={styles.resultText}>Total: {item.total}</Text>
        <Text style={styles.resultText}>Type: {item.type}</Text>
        <Text style={styles.resultText}>Date: {item.date}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={resultsData}
          renderItem={({item}) => createItem(item)}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              onRefresh={refreshResults}
              refreshing={isRefreshing}
              tintColor="dodgerblue"
              colors={['dodgerblue']}
            />
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 6,
  },
  resultText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
  userResult: {
    fontSize: 35,
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Lato-Bold',
  },
});

export default ResultsScreen;
