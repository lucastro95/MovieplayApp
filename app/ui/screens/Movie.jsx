import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../styles/RootColors';

import Title from '../components/movie/Title';
import Header from '../components/movie/Header';
import Information from '../components/movie/Information';
import Actions from '../components/movie/Actions';

const Movie = ({ route }) => {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header />
        <Title />
        <Actions />
        <Information />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default Movie;
