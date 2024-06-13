import React, { useEffect } from 'react';
import { View } from 'react-native';
import IconButton from '../common/IconButton';

const OrderBy = ({ text, order, setOrder, fetchMovies }) => {
    
    let icon;
    if (order === 'asc') {
        icon = 'sort-up';
    } else if (order === 'desc') {
        icon = 'sort-down';
    } else {
        icon = 'sort';
    }

    const handleOrderBy = () => {
        if (order === null) {
            setOrder('asc');
        } else if (order === 'asc'){
            setOrder('desc');
        } else if (order === 'desc') {
            setOrder('asc');
        }
    };

    const handleAction = () => {
        handleOrderBy()
        fetchMovies()
    }

    return (
        <View>
            <IconButton text={text} action={handleAction} iconName={icon} />
        </View>
    );
};

export default OrderBy;
