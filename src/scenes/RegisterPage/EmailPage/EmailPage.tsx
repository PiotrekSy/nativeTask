import React from 'react';
import { texts } from './texts';
import { styles } from './EmailPage.styles';
import { Controller } from 'react-hook-form';
import { EmailPageProps } from '../types/types';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmailPage = ({ control, emailError }: EmailPageProps,) => {

    return (
        <View style={styles.form}>
            <Text style={styles.error}>{emailError}</Text>
            <Text style={styles.title}>{texts.title}</Text>
            <Controller
                name="email"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (<>
                    <Icon name="mail" size={24} color="#777" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder={texts.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value} />
                </>)} />

        </View>
    )
}

export default EmailPage;