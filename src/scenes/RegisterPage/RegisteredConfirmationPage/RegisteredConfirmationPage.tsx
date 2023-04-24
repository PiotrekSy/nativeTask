import React from 'react';
import { View, Text } from 'react-native';
import { RegisteredConfirmationPageProps } from '../types/types'

const RegisteredConfirmationPage = ({ succesMsgId, succesMsg }: RegisteredConfirmationPageProps) => {
    return (
        <View>
            <Text>{succesMsg}</Text>
            <Text>{succesMsgId}</Text>
        </View>
    )
}

export default RegisteredConfirmationPage;