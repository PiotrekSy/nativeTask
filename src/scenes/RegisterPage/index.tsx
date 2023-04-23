import * as React from 'react';
import CSafeAreaView from '@components/CSafeAreaView';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller, } from "react-hook-form";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import Banner from './Banner/Banner';
import NamePage from './NamePage/NamePage';
import EmailPage from './EmailPage/EmailPage';
import PhonePage from './PhonePage/PhonePage';
import PasswordPage from './PasswordPage/PasswordPage';
import NavComponent from './NavComponent/NavComponent';
import TermsOfService from './TermsOfService/TermsOfService';
import AccountType from './AccountType/AccountType';

type FormData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  accountType: string;
};

const Register: FC = () => {
  const { t } = useTranslation();
  const goBack = useNavigationBackAction();

  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // reset({
    //   name: "",
    //   phone: "",
    //   email: "",
    //   password: "",
    //   accountType: "",
    // })
  };



  const currentScreenHandler = () => {
    currentScreen !== 5 ?
      setCurrentScreen(prevCount => prevCount + 1)
      : null
  }

  const options = ['trener', 'zawodnik', 'kibic', 'obserwator']

  return (
    <CSafeAreaView >
      <NavComponent goBack={goBack} />
      <Text>page : {currentScreen}</Text>
      <Banner />
      {currentScreen === 1 && <NamePage
        currentScreenHandler={currentScreenHandler}
        control={control} />}
      {currentScreen === 2 && <PhonePage
        currentScreenHandler={currentScreenHandler}
        control={control} />}
      {currentScreen === 3 && <EmailPage
        currentScreenHandler={currentScreenHandler}
        control={control} />}
      {currentScreen === 4 && <PasswordPage
        currentScreenHandler={currentScreenHandler}
        control={control} />}
      {currentScreen === 5 &&
        <View>
          <Text>Wybierz rodzaj konta</Text>
          <Text>
            Wybierz rodzaj swojego konta. W późniejszym etapie będzie moliwośc zmiany lub dodania innych typów konta.
          </Text>
          {options.map((item, index) =>
            <TouchableOpacity
              key={index}
              onPress={(
                handleSubmit((data) => {
                  onSubmit({ ...data, accountType: item }),
                    setCurrentScreen(6)
                }))}>
              <Text>{item}</Text>
              <Text>asdasdasdadadasdasd</Text>
              <Text>IMAGE</Text>
            </TouchableOpacity>)}
        </View>}
      <TermsOfService />
    </CSafeAreaView >
  );
};

const styles = StyleSheet.create({
  navigationElement: {
    marginTop: 40,
    color: 'red'
  },

});

export default React.memo(Register);
