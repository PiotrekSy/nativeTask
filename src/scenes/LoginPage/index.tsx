import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { View, Flex, Icon, Pressable, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { FC, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FC = () => {
  const { t } = useTranslation();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();

  // useLayoutEffect(() => {
  //   setOptions({
  //     headerLeft: () => (
  //       <Flex flex={1} justifyContent="center" backgroundColor='red' >
  //         <Pressable onPress={goBack}>
  //           <Icon as={MaterialIcons} name="arrow-back-ios" color="MIDNIGHT_BLUE" size="24px" />
  //         </Pressable>
  //       </Flex>
  //     ),
  //     headerTitle: () => (
  //       <Text fontSize="20px" fontFamily="body" fontWeight={700} >
  //         {t('Login:Login')}
  //       </Text>
  //     ),
  //   });
  // }, [goBack, setOptions, t]);

  return (
    <CSafeAreaView >
      <View>
        <Pressable onPress={goBack} style={styles.navigationElement}>
          <Text > BACK </Text >
        </Pressable>
        <Text>Login</Text>
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

