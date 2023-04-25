import React from 'react';
import { texts } from './texts';
import { styles } from './Banner.style';
import { Text } from 'react-native';

const Banner = () => {
    return (
        <Text style={styles.banner}>{texts.banner}</Text >
    )
}

export default Banner;