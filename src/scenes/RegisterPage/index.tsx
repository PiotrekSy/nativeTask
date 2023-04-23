import * as React from 'react';
import CSafeAreaView from '@components/CSafeAreaView';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import Banner from './Banner/Banner';
import NamePage from './NamePage/NamePage';
import EmailPage from './EmailPage/EmailPage';
import PhonePage from './PhonePage/PhonePage';
import PasswordPage from './PasswordPage/PasswordPage';
import NavComponent from './NavComponent/NavComponent';
import TermsOfService from './TermsOfService/TermsOfService';
// import AccountType from './AccountType/AccountType';

type FormPostedData = {
  "username": string,
  "email": string,
  "password1": string,
  "password2": string,
  "first_name": string,
  "last_name": string,
  "is_fan": boolean,
  "is_trainer": boolean,
  "is_player": boolean,
  "is_scout": boolean,
  "phone": string,
}

const Register: FC = () => {
  // const { t } = useTranslation();
  const goBack = useNavigationBackAction();

  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const { control, handleSubmit, reset } = useForm<FormPostedData>();
  // const [role, setRole] = useState<string>('')

  const onSubmit = async (data: FormPostedData) => {

    const dataModel = {
      email: data.email,
      password1: data.password1,
      password2: data.password1,
      first_name: data.username,
      last_name: data.username,
      phone: data.phone,
      is_scout: data.is_scout,
      is_player: data.is_player,
      is_trainer: data.is_trainer,
      is_fan: data.is_fan
    }

    try {
      const url = "https://api.dev.footballchallengeapp.com/auth/registration/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(dataModel),
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log('sending below data :');
      const jsonResponse: any = await response.json();
      console.log(jsonResponse);
      console.log(dataModel);
      console.log('przesłano');
      return jsonResponse;
    }
    catch (error) {
      {
        console.error("Error registering user:", error);
        console.log(error)
        throw error;
      }
    }
  }

  const currentScreenHandler = () => {
    currentScreen !== 5 ?
      setCurrentScreen(prevCount => prevCount + 1)
      : null
  }


  // const options: { type: string, option: string }[] = [
  //   { type: 'trener', option: "is_trainer" },
  //   { type: 'zawodnik', option: "is_player" },
  //   { type: 'kibic', option: "is_fan" },
  //   { type: 'obserwator', option: "is_scout" },
  // ];

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
        <>
          <Text>Wybierz rodzaj konta</Text>
          <Text>
            Wybierz rodzaj swojego konta. W późniejszym etapie będzie moliwośc zmiany lub dodania innych typów konta.
          </Text>

          <View>
            <TouchableOpacity
               onPress={handleSubmit((data) => {
                onSubmit({ ...data, is_trainer: true })
                setCurrentScreen(6)
              })}>
              <Text>TRENER</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={handleSubmit((data) => {
                onSubmit({ ...data, is_player: true })
                setCurrentScreen(6)
              })}>
              <Text>ZAWODNIK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit((data) => {
                onSubmit({ ...data, is_fan: true })
                setCurrentScreen(6)
              })}>
              <Text>FAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit((data) => {
                onSubmit({ ...data, is_scout: true })
                setCurrentScreen(6)
              })}>
              <Text>OBSERWATOR</Text>
            </TouchableOpacity>

          </View>
        </>}

      <TermsOfService />
    </CSafeAreaView >
  );
}

const styles = StyleSheet.create({
  navigationElement: {
    marginTop: 40,
    color: 'red'
  },
});

export default React.memo(Register);
