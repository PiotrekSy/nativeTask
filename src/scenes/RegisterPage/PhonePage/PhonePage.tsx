import React from 'react';
import { Controller } from 'react-hook-form';
import { PhonePageProps } from '../types/types';
import { View, Text, TextInput, Button } from 'react-native';
import { currentScreenHandler } from '../Functions/functions';

const PhonePage = ({ currentScreen, setCurrentScreen, control, phoneError }: PhonePageProps) => {

    return (
        <View>
            <Text>{phoneError}</Text>
            <Text>Telefon</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Wpisz swój numer telefonu"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="phone"
            />
            <Button title="Dalej" onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })} />
        </View>
    )
}

export default PhonePage;