import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions, Share, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/RootColors';
import { useNavigation } from '@react-navigation/native';
import I18n from '../../../assets/strings/l18n';
import placeholder from '../../../assets/images/placeholder_movie.png'

const { height } = Dimensions.get('window');

const Header = ({ movie }) => {
    const navigation = useNavigation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = movie.imgPaths;

    const handleBack = () => {
        navigation.pop();
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `${I18n.t('movie.share')}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    const handleNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handlePreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.backBtn}>
                <Icon
                    name='arrowleft'
                    color={colors.pink}
                    size={35}
                    onPress={handleBack}
                />
            </View>
            <View style={styles.shareBtn}>
                <Icon2
                    name='share'
                    color={colors.pink}
                    size={35}
                    onPress={handleShare}
                />
            </View>
            {images.length !== 0 && (
                <View style={styles.moveBtn}>
                    <Icon3
                        name='arrow-back-ios'
                        color={colors.white}
                        size={35}
                        onPress={handlePreviousImage}
                    />
                    <Icon3
                        name='arrow-forward-ios'
                        color={colors.white}
                        size={35}
                        onPress={handleNextImage}
                    />
                </View>
            )}
            <Image
                style={styles.image}
                source={images.length === 0 ? placeholder : { uri: images[currentImageIndex] }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height / 2,
        position: 'relative',
    },
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    shareBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
    },
    moveBtn: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '50%',
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});

export default Header;
