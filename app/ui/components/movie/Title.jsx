import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/RootColors';
import I18n from '../../../assets/strings/l18n';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dune: Part II</Text>
      <Text style={styles.year}>{I18n.t('movie.release')}: 2024</Text>
      <View style={styles.duration}>
        <Icon
          name='clock'
          color={colors.white}
          size={25}
        />
        <Text style={styles.durationText}>2h 47m</Text>
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
