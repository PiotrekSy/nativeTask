import React from 'react';
import { texts } from './texts';
import { styles } from './PhonePage.style';
import { Controller } from 'react-hook-form';
import { PhonePageProps } from '../types/types';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PhonePage = ({ control, phoneError }: PhonePageProps) => {

    return (
        <View style={styles.form}>
            <Text style={styles.error}>{phoneError}</Text>
            <Text style={styles.title}>{texts.title}</Text>
            <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (<>
                    <Icon name="phone" size={24} color="#777" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder={texts.placeholder}
                        placeholderTextColor={'rgba(237, 237, 237, 0.7)'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />
                </>)} />
        </View>)
}

export default PhonePage;