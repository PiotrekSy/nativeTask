import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Controller } from 'react-hook-form';
import { currentScreenHandler } from '../Functions/functions';
import { EmailPageProps } from '../types/types';

const EmailPage = ({ currentScreen, setCurrentScreen, control, emailError }: EmailPageProps,) => {

    return (
        <View>
            <Text>{emailError}</Text>
            <Text>Email</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Wpisz swój email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            <Button title="Dalej" onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })} />
        </View>
    )
}

export default EmailPage;