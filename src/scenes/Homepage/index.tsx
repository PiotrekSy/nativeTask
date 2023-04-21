import { useCreateUser, useDeleteUser, useModifyUser } from '@api/hooks/useUser';
import EnvInfoView from '@components/AppVersion';
import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { Button, Flex, Icon, ScrollView } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, FC, memo, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Home: FC = () => {
  const [t] = useTranslation();
  const navigation = useNavigation<GenericNavigationProps>();

  return (
    <CSafeAreaView>
      <ScrollView style={styles.fullPage}>
        <View>
          <Text style={styles.titleText}>
            FC.app
          </Text>
          <Text >Witaj w football challenge!</Text>
        </View>
        <View>
          <Text >MASZ JUŻ KONTO?</Text>
          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <View style={styles.buttonText}>
                <Text >
                  {t('Homepage:loginIn')}
                </Text>
              </View>
            </Flex>
          </Button>
          <Text >LUB ZAREJESTRUJ SIĘ</Text>
          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <View style={styles.buttonText}>
                <Text >
                  {t('Homepage:googleLogin')}
                </Text>
              </View>
            </Flex>
          </Button>

          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >
                {t('Homepage:facebookLogin')}
              </Text>
            </Flex>
          </Button>

          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >
                {t('Homepage:appleLogin')}
              </Text>
            </Flex>
          </Button>

          <Button
            onPress={() => navigation.navigate('Main', { screen: 'Register' })}
            backgroundColor="SUN_FLOWER"
            mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >
                {t('Homepage:emailSignUp')}
              </Text>
            </Flex>
          </Button>
          {/* <EnvInfoView /> */}
        </View>
      </ScrollView >
    </CSafeAreaView >
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 0.5,
    flexGrow: 1,
    padding: 15,
  },
  titleText: {
    color: "red",
    // fontFamily: "body",
    // fontWeight: 700,
    fontStyle: "normal",
    // fontSize: "3xl",
    paddingBottom: 20,
    textAlign: "center",
  },
  buttonText: {
    color: 'red',
    // fontFamily: "body",
    fontWeight: 900,
    // fontStyle: "normal",
    // fontSize: "3xl",
    paddingBottom: 20,
    textAlign: "center",
  },
})

export default memo(Home);
