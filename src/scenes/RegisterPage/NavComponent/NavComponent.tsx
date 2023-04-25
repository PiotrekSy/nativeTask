import React from 'react';
import { styles } from './NavComponent.style';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavProps } from '../types/types'
import { SvgXml } from 'react-native-svg';
import { xml } from './../../../assets/images/LogoSmall';
import { arrowxml } from './../../../assets/images/Vector';

const NavComponent = ({ goBack }: NavProps) => {

    return (<>
        <View style={styles.nav}>
            <SvgXml xml={xml} width="100%" />
            <TouchableOpacity onPress={goBack} style={styles.backButton}>
                <SvgXml xml={arrowxml} width="15%"  />
            </TouchableOpacity>
        </View>
    </>
    )
}

export default NavComponent;