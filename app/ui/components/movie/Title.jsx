import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/RootColors';
import I18n from '../../../assets/strings/l18n';

const Title = ({ movie }) => {
  const releaseYear = movie.releaseDate ? movie.releaseDate.split('-')[0] : '';

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>{I18n.t('movie.release')}: {releaseYear}</Text>
      <View style={styles.duration}>
        <Icon
          name='clock'
          color={colors.white}
          size={25}
        />
        <Text style={styles.durationText}>{convertMinutesToHours(movie.duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: `${colors.white}`
  },
  year: {
    fontSize: 20,
    color: `${colors.white}`,
    marginTop: 10,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  durationText: {
    color: `${colors.white}`,
    fontSize: 20,
    marginLeft: 10,
  }
});

export default Title;
