import React from 'react';
import { texts } from '../texts';
import { styles } from '../index.styles';
import { View, TouchableOpacity, Text } from 'react-native';
import { BackArrowPropTypes } from '../types/types';
import { currentScreenHandler } from '../utils/utils';

const StatusBar = ({ currentScreen, setCurrentScreen }: BackArrowPropTypes) => {

    return (
        <>
            <View style={styles.statusBar}>
                <Text style={styles.counterText}>{texts.step}</Text>
                <Text style={styles.counter}>{currentScreen}/{texts.pageCount}</Text>
            </View>
            <View style={styles.progressBarBack}>
                <View style={[styles.progressBarFront, { width: `${currentScreen * 25}%` }]} />
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })}>
                <Text style={styles.nextButtonText}>{texts.next}</Text>
            </TouchableOpacity>
        </>
    )
}

export default StatusBar;