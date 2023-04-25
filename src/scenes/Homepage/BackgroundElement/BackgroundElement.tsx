import React from 'react';
import { texts } from './texts';
import { View, Text, Image } from 'native-base';
import { styles } from './BackgroundElement.style';
import { Svg, Path } from 'react-native-svg';


const BackgroundElement = () => {
    return (
        <View style={styles.background} >
            <Image style={styles.image} source={require('../../../assets/images/Background_img.png')} />
            <View style={styles.banner} >
                <></>
                <Text style={styles.greeting}>{texts.greeting}</Text>
            </View>
        </View>
    )
}

export default BackgroundElement;