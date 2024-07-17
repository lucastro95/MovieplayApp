import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/RootColors";
import I18n from "../../../assets/strings/l18n";

const SearchBar = ({ input, setInput, fetchMovies }) => {

    const handleInput = (text) => {
        setInput(text);
    };

    const handleSearch = () => {
        if(input !== "") {
            fetchMovies()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleInput}
                    value={input}
                    placeholder={I18n.t('search.input')}
                    placeholderTextColor={colors.gray}
                />
            </View>
            <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
                <Icon name='search' color={colors.white} size={25} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: '75%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: colors.black
    },
    iconButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: colors.pink,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
});

export default SearchBar;
