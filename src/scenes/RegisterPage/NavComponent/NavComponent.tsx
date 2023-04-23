import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type NavProps = {
    goBack: () => void;
};

const NavComponent = ({ goBack }: NavProps) => {

    return (
        <View>
            <TouchableOpacity
                onPress={goBack}
            // style={styles.navigationElement}
            >
                <Text > BACK </Text >
            </TouchableOpacity>
            <Text>FC APP</Text>
        </View>
    )
}

export default NavComponent;