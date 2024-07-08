import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/RootColors';
import I18n from '../../../assets/strings/l18n';
import Card from './Card';

const Information = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{movie.synopsis}</Text>
      <Text style={styles.moreInfo}>{I18n.t('movie.info')}</Text>
      <Text style={styles.subtitle}>{I18n.t('movie.genres')}</Text>
      <Text style={styles.text}>{movie.genres.join(', ')}</Text>
      <Text style={styles.subtitle}>{I18n.t('movie.director')}</Text>
      <Card info={movie.director}/>
      <Text style={styles.subtitle}>{I18n.t('movie.actors')}</Text>
      <FlatList
        data={movie.cast}
        renderItem={(item) => <Card info={item.item}/>}
        keyExtractor={(item) => item.index}
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
