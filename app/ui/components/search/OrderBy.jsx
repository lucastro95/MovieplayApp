import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../common/IconButton';


const OrderBy = ( {text}) => {
    const [orderState, setOrderState] = useState('unordered');

    const handleOrderBy = () => {
        if (orderState === 'unordered') {
            console.log('Ascending')
            setOrderState('ascending');
        } else if (orderState === 'ascending'){
            console.log('Descending')
            setOrderState('descending');
        } else if (orderState === 'descending') {
            console.log('Unordered')
            setOrderState('unordered');

        }
        
    };

    if (orderState === 'ascending') {
        icon = 'sort-up';
    } else if (orderState === 'descending') {
        icon = 'sort-down';
    } else if (orderState === 'unordered') {
        icon = 'sort';
    }


    return (
        <View>
            <IconButton text= {text} action={handleOrderBy} iconName={icon} />
        </View>
    );
};


;

export default OrderBy;