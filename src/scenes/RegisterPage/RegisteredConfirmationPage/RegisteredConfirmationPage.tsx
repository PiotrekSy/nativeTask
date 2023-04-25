import React from 'react';
import { texts } from "./texts";
import { styles } from './RegisteredConfirmationPage.style';
import { View, Text } from 'react-native';
import { RegisteredConfirmationPageProps } from '../types/types'
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { SvgXml } from 'react-native-svg';
import { arrowxml } from './../../../assets/images/Vector';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisteredConfirmationPage = ({ succesMsgId, succesMsg }: RegisteredConfirmationPageProps) => {

    const goBack = useNavigationBackAction()

    return (
        <View style={styles.container}>
            <Text style={styles.succesMsg}>{texts.succes}</Text>
            <Text style={styles.serverMsg}>{succesMsg}</Text>
            <Text style={styles.succesMsg}>{texts.succesID}</Text>
            <Text style={styles.serverMsg}>{succesMsgId}</Text>
            <TouchableOpacity onPress={goBack}>
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <SvgXml xml={arrowxml} width="15%" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default RegisteredConfirmationPage;