import React from 'react';
import getStyles from './ModdedButton.style';
import { View, Text, } from 'native-base';
import { TouchableOpacity, Image } from 'react-native'
import { GenericNavigationProps } from '@routes/types';
import { useNavigation } from '@react-navigation/native';
import { ButtonProps } from '../types';

const ModdedButton = ({ title, mode, icon, navigateTo }: ButtonProps) => {

    const navigation = useNavigation<GenericNavigationProps>();
    const styles = getStyles({ mode });

    return (
        <TouchableOpacity style={styles.background}
            onPress={() => navigation.navigate('Main', { screen: navigateTo })}>
            <View style={styles.content} >
                {icon && <Image style={[styles.image, { height: 25, width: 25 }]} source={icon} />}
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ModdedButton;