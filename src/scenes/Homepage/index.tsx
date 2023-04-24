import { texts } from './texts';
import { styles } from './index.style';
import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';
import { GenericNavigationProps } from '@routes/types';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Icon, ScrollView } from 'native-base';
import CSafeAreaView from '@components/CSafeAreaView';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Home: FC = () => {
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
          <Text >{texts.gotAcc}</Text>
          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <View style={styles.buttonText}>
                <Text>Log In</Text>
              </View>
            </Flex>
          </Button>
          <Text >LUB ZAREJESTRUJ SIĘ</Text>
          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <View style={styles.buttonText}>
                <Text >
                  Zaloguj za pomocą google
                </Text>
              </View>
            </Flex>
          </Button>

          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >
                Zaloguj za pomocą facebooka

              </Text>
            </Flex>
          </Button>

          <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >
                Zaloguj za appleId
              </Text>
            </Flex>
          </Button>

          <Button
            onPress={() => navigation.navigate('Main', { screen: 'Register' })}
            backgroundColor="SUN_FLOWER"
            mb="5px">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
              <Text >Zarejestruj za Emaila</Text>
            </Flex>
          </Button>
        </View>
      </ScrollView >
    </CSafeAreaView >
  );
};

export default memo(Home);
