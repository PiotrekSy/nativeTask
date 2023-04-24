import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { View, Flex, Icon, Pressable, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { FC, useLayoutEffect } from 'react';

const Login: FC = () => {
  const goBack = useNavigationBackAction();

  return (
    <CSafeAreaView >
      <View>
        <Pressable onPress={goBack} style={styles.navigationElement}>
          <Text > BACK </Text >
        </Pressable>
        <Text>Login</Text>
      </View>
      <View>
        <Text></Text>

      </View>
    </CSafeAreaView>
  );
};

const styles = StyleSheet.create({

  navigationElement: {
    marginTop: 40,
    color: 'red'
  }

});

export default React.memo(Login);

