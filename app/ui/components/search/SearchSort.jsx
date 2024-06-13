import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/RootColors";
import OrderBy from "./OrderBy";
import I18n from "../../../assets/strings/l18n";

const SearchSort = ({ rating, setRating, release, setRelease, fetchMovies }) => {
    return (
        <View style={styles.filterTab}>
            <OrderBy 
                text={I18n.t('search.rate')}
                order={rating}
                setOrder={setRating}
                fetchMovies={fetchMovies}
            />
            <OrderBy 
                text={I18n.t('search.date')} 
                order={release}
                setOrder={setRelease}
                fetchMovies={fetchMovies}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filterTab: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginTop: 30,
        marginBottom: 20,
        width: '90%',
        maxHeight: 50,
    },
    text: {
        color: `${colors.white}`
    },
    filterButton: {
        backgroundColor: `${colors.pink}`,
        color: `${colors.white}`,
        flexDirection: 'row',
    },
});

export default SearchSort;
