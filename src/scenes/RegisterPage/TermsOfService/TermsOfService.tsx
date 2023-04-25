import React from 'react';
import { texts } from './texts';
import { View, Text } from 'react-native';
import { styles } from './TermsOfService.styles';

const TermsOfService = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texts.accInfo}</Text>
      <Text style={styles.tos}>{texts.tos}</Text>
    </View>
  )
}

export default TermsOfService;