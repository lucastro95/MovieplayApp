import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/RootColors';
import I18n from '../../../assets/strings/l18n';
import Card from './Card';

const Information = () => {
  const [actors, setActors] = useState([1, 2, 3, 4])
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>
        Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.
      </Text>
      <Text style={styles.moreInfo}>{I18n.t('movie.info')}</Text>
      <Text style={styles.subtitle}>{I18n.t('movie.genres')}</Text>
      <Text style={styles.text}>Science Fiction, Adventure</Text>
      <Text style={styles.subtitle}>{I18n.t('movie.director')}</Text>
      <Card />
      <Text style={styles.subtitle}>{I18n.t('movie.actors')}</Text>
      <FlatList
        data={actors}
        renderItem={() => <Card />}
        keyExtractor={(item) => item.toString()}
        horizontal 
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  desc: {
    color: `${colors.white}`,
    textAlign: 'justify',
    fontSize: 20,
  },
  moreInfo: {
    color: `${colors.white}`,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
  },
  subtitle: {
    color: `${colors.white}`,
    fontSize: 25,
    marginTop: 15,
    fontWeight: '700'
  },
  text: {
    color: `${colors.white}`,
    fontSize: 20,
    marginTop: 10
  }
});

export default Information;
