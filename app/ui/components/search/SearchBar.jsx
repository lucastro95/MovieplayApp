import React from "react";
import { StyleSheet, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/RootColors"
import I18n from "../../../assets/strings/l18n";

const SearchBar = () => {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Icon name='search' color={colors.pink} size={40} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={I18n.t('search.input')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        flex: 1,
        alignItems: 'center'
    },
    searchBar: {
        width: '90%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: `${colors.white}`
    },
    input: {
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        fontSize: 18,
        color: `${colors.black}`
    }
})

export default SearchBar