import React from 'react';
import getStyles from './ModdedButton.style';
import { Button, Flex, Text, } from 'native-base';
import { Image } from 'react-native'
import { GenericNavigationProps } from '@routes/types';
import { useNavigation } from '@react-navigation/native';
import { ButtonProps } from '../types';

const ModdedButton = ({ title, mode, icon, navigateTo }: ButtonProps) => {

    const navigation = useNavigation<GenericNavigationProps>();
    const styles = getStyles({ mode });

    return (
        <Button style={styles.background}
            onPress={() => navigation.navigate('Main', { screen: navigateTo })}>
            <Flex style={styles.content}>
                <Image style={styles.image} source={require(`${icon}`)} />
                <Text style={styles.text}>{title}</Text>
            </Flex>
        </Button>
    )


}

export default ModdedButton;