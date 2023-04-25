import React from 'react';
import { texts } from './texts';
import { styles } from './PasswordPages.styles';
import { Controller } from 'react-hook-form';
import { PasswordPageProps } from '../types/types';
import { View, Text, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PasswordPage = ({ control, passwordError }: PasswordPageProps,) => {

    return (
        <View style={styles.form}>
            <Text style={styles.error}>{passwordError}</Text>
            <Text style={styles.title}>{texts.title}</Text>
            <Controller
                control={control}
                name="password1"
                render={({ field: { onChange, onBlur, value } }) => (<>
                    <Icon name="lock" size={24} color="#777" style={styles.icon} />
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

export default PasswordPage;