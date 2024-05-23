import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../common/IconButton';


const OrderBy = ( {text, action, iconName}) => {
    const orderByDate = () => {
        console.log('Ordered by date');
    };
    const orderByRate= () => {
        console.log('Ordered by rate');
    };
    const handleOrderBy = () => {
        if (action === 'orderByDate') {
            action = orderByDate();
        } else {
            action = orderByRate();
        }
      };

    return (
        <View>
            <IconButton text= {text} action={handleOrderBy} iconName={iconName} />
        </View>
    );
};

;

export default OrderBy;