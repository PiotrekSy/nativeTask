import React from 'react';
import { View, Image } from 'native-base';
import { styles } from './BackgroundElement.style';
import { SvgXml } from 'react-native-svg';
import { xml } from './../../../assets/images/Header_text';

const BackgroundElement = () => {

    return (
        <View style={styles.background} >
            <Image style={styles.image} source={require('../../../assets/images/Background_img.png')} alt={'background'} />
            <View style={styles.banner} >
                <SvgXml xml={xml} />
            </View>
        </View>
    )
}

export default BackgroundElement;