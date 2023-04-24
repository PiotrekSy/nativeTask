import React from 'react';
import { texts } from './texts';
import { styles } from './Banner.styles';
import { View, Text } from 'react-native';

const Banner = () => {
    return (
        <View >
            <Text style={styles.container}>{texts.banner}</Text >
        </View>
    )
}

export default Banner;