import { StyleSheet, View } from "react-native"
import { colors } from "../../styles/RootColors"
import Icon from 'react-native-vector-icons/FontAwesome5'
import OrderBy from "./OrderBy"



const SearchSort = () => {


    return (
        <View style = {styles.filterTab}>
            <View style = {styles.iconContainer}>
                <Icon name = {"sort"} style = {styles.icon} size = {40} color = {colors.white}/>
            </View>
            <OrderBy text = {"Rate"} style = {styles.filterButton}></OrderBy>
            <OrderBy text = {"Date"} style = {styles.filterButton}></OrderBy>

        </View>

    )

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

    iconContainer: {
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    filterButton: {
        backgroundColor: `${colors.pink}`,
        color: `${colors.white}`,
        flexDirection: 'row',

    },

})


export default SearchSort