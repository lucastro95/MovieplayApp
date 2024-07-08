import React from 'react';
import { FlatList, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from '../../styles/RootColors';

const Genres = ({ genres, setGenre }) => {

  const handleGenre = (id) => {
    setGenre(id)
  }

  const renderItem = ({ item }) => (
    <TouchableHighlight style={styles.button} onPress={() => handleGenre(item.id)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal 
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  button: {
    width: 160,
    height: 40,
    marginHorizontal: 8,
    backgroundColor: `${colors.pink}`,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: `${colors.white}`,
    fontSize: 20
  }
});

export default Genres;
