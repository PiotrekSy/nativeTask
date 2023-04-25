import React from 'react';
import { View, Text } from 'react-native';
import { RegisteredConfirmationPageProps } from '../types/types'
import { useNavigationBackAction } from '@hooks/useNavigationBack';
// import NavComponent from "../NavComponent/NavComponent";


const RegisteredConfirmationPage = ({ succesMsgId, succesMsg }: RegisteredConfirmationPageProps) => {

const goBack = useNavigationBackAction()

    return (
        <View>
            <Text>{succesMsg}</Text>
            <Text>{succesMsgId}</Text>
            {/* <NavComponent goBack={goBack} /> */}
        </View>
    )
}

export default RegisteredConfirmationPage;