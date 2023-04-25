import React from 'react';
import { texts } from './texts';
import { styles } from './NamePage.styles';
import { Controller } from 'react-hook-form';
import { NamePageProps } from '../types/types';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NamePage = ({ control, nameError }: NamePageProps,) => {

    return (
        <View style={styles.form}>
            <Text style={styles.error}>{nameError}</Text>
            <Text style={styles.title}>{texts.title}</Text>
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (<>
                    <Icon name="person" size={24} color="#777" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder={texts.placeholder}
                        placeholderTextColor={'rgba(237, 237, 237, 0.7)'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />
                </>)} />
        </View>)
};

export default NamePage;