import React from 'react';
import { texts } from './texts';
import { styles } from './NamePage.style';
import { Controller } from 'react-hook-form';
import { NamePageProps } from '../types/types';
import { View, Text, TextInput, Button } from 'react-native';
import { currentScreenHandler } from '../utils/utils';

const NamePage = ({ currentScreen, setCurrentScreen, control, nameError }: NamePageProps,) => {

    return (
        <View>
            <Text>{nameError}</Text>
            <Text style={styles.red}>{texts.title}</Text>
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder={texts.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />)} />
            <Button title={texts.forwards}
                onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })} />
        </View>)
};

export default NamePage;