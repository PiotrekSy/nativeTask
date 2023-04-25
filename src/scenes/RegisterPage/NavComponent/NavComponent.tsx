import React from 'react';
import { texts } from './texts';
import { styles } from './NavComponent.style';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavProps } from '../types/types'

const NavComponent = ({ goBack }: NavProps) => {

    return (
        <View>
            <TouchableOpacity onPress={goBack} >
                <Text style={styles.navElement}>{texts.back}</Text >
            </TouchableOpacity>
            <Text>FC APP</Text>
        </View>
    )
}

export default NavComponent;