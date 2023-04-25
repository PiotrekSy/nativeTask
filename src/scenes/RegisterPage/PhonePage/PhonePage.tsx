import React from 'react';
import { texts } from './texts';
import { styles } from './PhonePage.style';
import { Controller } from 'react-hook-form';
import { PhonePageProps } from '../types/types';
import { View, Text, TextInput, Button } from 'react-native';
import { currentScreenHandler } from '../utils/utils';

const PhonePage = ({ currentScreen, setCurrentScreen, control, phoneError }: PhonePageProps) => {

    return (
        <View>
            <Text>{phoneError}</Text>
            <Text style={styles.text}>{texts.title}</Text>
            <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder={texts.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />)} />
            <Button title={texts.forwards} onPress={() =>
                currentScreenHandler({ currentScreen, setCurrentScreen })} />
        </View>)
}

export default PhonePage;