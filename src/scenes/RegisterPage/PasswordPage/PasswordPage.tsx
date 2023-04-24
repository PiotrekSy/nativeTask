import React from 'react';
import { texts } from './texts';
import { styles } from './PasswordPages.styles';
import { Controller } from 'react-hook-form';
import { PasswordPageProps } from '../types/types';
import { View, Text, TextInput, Button } from 'react-native';
import { currentScreenHandler } from '../Functions/functions';

const PasswordPage = ({ currentScreen, setCurrentScreen, control, passwordError }: PasswordPageProps,) => {

    return (
        <View >
            <Text>{passwordError}</Text>
            <Text style={styles.red}>{texts.title}</Text>
            <Controller
                control={control}
                name="password1"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder={texts.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />)} />
            <Button title={texts.forwards} onPress={() =>
                currentScreenHandler({ currentScreen, setCurrentScreen })} />
        </View>
    )
}

export default PasswordPage;