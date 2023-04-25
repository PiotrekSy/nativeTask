import React from 'react';
import { styles } from './NavComponent.style';
import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { xml } from './../../../assets/images/LogoSmall';
import { arrowxml } from './../../../assets/images/Vector';
import { useNavigationBackAction } from '@hooks/useNavigationBack';

const NavComponent = () => {

    const goBack = useNavigationBackAction();

    return (<>
        <View style={styles.nav}>
            <SvgXml xml={xml} width="100%" />
            <TouchableOpacity onPress={goBack} style={styles.backButton} >
                <SvgXml xml={arrowxml} width="100%" />
            </TouchableOpacity>
        </View>
    </>
    )
}

export default NavComponent;