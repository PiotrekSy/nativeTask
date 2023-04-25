import React from 'react';
import { texts } from './texts';
import { View, Text } from 'react-native';
import { styles } from './TermsOfService.styles';

const TermsOfService = () => {

  return (
    <View>
      <Text style={styles.text}>{texts.accInfo}</Text>
      <Text style={styles.text}>{texts.tos}</Text>
    </View>
  )
}

export default TermsOfService;