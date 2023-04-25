import React from 'react';
import { texts } from './texts';
import { styles } from './EmailPage.styles';
import { Controller } from 'react-hook-form';
import { EmailPageProps } from '../types/types';
import { currentScreenHandler } from '../utils/utils';
import { View, Text, TextInput, Button } from 'react-native';

const EmailPage = ({ currentScreen, setCurrentScreen, control, emailError }: EmailPageProps,) => {

    return (
        <View>
            <Text>{emailError}</Text>
            <Text style={styles.text}>{texts.title}</Text>
            <Controller
                name="email"
                control={control}
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

export default EmailPage;