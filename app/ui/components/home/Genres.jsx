import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from '../../styles/RootColors';

const Genres = ({ genres, setGenre, genre }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenre = (id) => {
    setSelectedGenre(id);
    if (id === genre) {
      setGenre(null)
      setSelectedGenre(null);
    } else {
      setGenre(id);
    }
  }

  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={[styles.button, item.id === selectedGenre && styles.selectedButton]}
      onPress={() => handleGenre(item.id)}
    >
      <Text style={[styles.buttonText, item.id === selectedGenre && styles.selectedButtonText]}>{item.name}</Text>
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
  selectedButton: {
    backgroundColor: `${colors.white}`,
  },
  buttonText: {
    color: `${colors.white}`,
    fontSize: 20
  },
  selectedButtonText: {
    color: `${colors.pink}`,
  }
});

export default Genres;
