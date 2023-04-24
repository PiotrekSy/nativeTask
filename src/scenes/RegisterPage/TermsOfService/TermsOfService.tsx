import React from 'react';
import { texts } from './texts';
import { View, Text } from 'react-native';

const TermsOfService = () => {

  return (
    <View>
      <Text>{texts.accInfo}</Text>
      <Text>{texts.tos}</Text>
    </View>
  )
}

export default TermsOfService;