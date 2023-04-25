import { texts } from './texts';
import { styles } from './index.style';
import React, { FC, memo } from 'react';
import { Text, View, } from 'react-native';
import { FlatList } from 'native-base';
import BackgroundElement from './BackgroundElement';
import CSafeAreaView from '@components/CSafeAreaView';
import ModdedButton from './Buttons/ModdedButton';
import { listButtonsData, registerButton, loginButton } from './Buttons/buttonsData';

const Home: FC = () => {

  return (
    <CSafeAreaView >
      <BackgroundElement />
      <View style={styles.buttonsBackground}>

        <View style={styles.buttonsList}>
          <Text style={styles.bannerText}>{texts.gotAcc}</Text>
          <ModdedButton
            id={loginButton.id}
            title={loginButton.title}
            mode={loginButton.mode}
            icon={loginButton.icon}
            navigateTo={loginButton.navigateTo}
          />
          <Text style={styles.bannerText}>{texts.getRegistered}</Text>

          <FlatList
            contentContainerStyle={{ flexGrow: 1, margin: 'auto', alignItems: 'center' }}
            style={styles.flatList}
            data={listButtonsData}
            renderItem={({ item }) =>
              <ModdedButton
                id={item.id}
                title={item.title}
                mode={item.mode}
                icon={item.icon}
                navigateTo={item.navigateTo} />}
            keyExtractor={item => item.id}
          />

          <ModdedButton
            id={registerButton.id}
            title={registerButton.title}
            mode={registerButton.mode}
            icon={registerButton.icon}
            navigateTo={registerButton.navigateTo}
          />
        </View>
      </View>
    </CSafeAreaView >
  );
};


export default memo(Home);
