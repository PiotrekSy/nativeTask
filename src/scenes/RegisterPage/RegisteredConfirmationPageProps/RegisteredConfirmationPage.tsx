import React from 'react';
import { View, Text } from 'react-native';


type RegisteredConfirmationPageProps = {
    succesMsgId: string,
    succesMsg: string
}

const RegisteredConfirmationPage = ({ succesMsgId, succesMsg }: RegisteredConfirmationPageProps) => {
    return (
        <View>
            <Text>
                {succesMsg}
            </Text>
            <Text>
                {succesMsgId}
            </Text>
        </View>
    )
}

export default RegisteredConfirmationPage;