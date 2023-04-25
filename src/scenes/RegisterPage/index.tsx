import { texts } from './texts';
import { FC, useState } from 'react';
import { styles } from './index.styles';
import { useForm } from "react-hook-form";
import { defaultObject } from './utils/utils';
import { FormPostedData } from './types/types';
import { currentScreenHandler } from './utils/utils';
import { Image, KeyboardAvoidingView } from 'native-base';
import { Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import * as React from 'react';
import Banner from './Banner/Banner';
import NamePage from './NamePage/NamePage';
import EmailPage from './EmailPage/EmailPage';
import PhonePage from './PhonePage/PhonePage';
import CSafeAreaView from '@components/CSafeAreaView';
import PasswordPage from './PasswordPage/PasswordPage';
import NavComponent from './NavComponent/NavComponent';
import TermsOfService from './TermsOfService/TermsOfService';
import RegisteredConfirmationPage from './RegisteredConfirmationPage/RegisteredConfirmationPage';

const Register: FC = () => {

  const goBack = useNavigationBackAction();
  const [succesMsg, setSuccesMsg] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [succesMsgId, setSuccesMsgId] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const { control, handleSubmit, reset } = useForm<FormPostedData>();

  const onSubmit = async (data: FormPostedData) => {

    const dataModel = {
      username: data?.email,
      email: data?.email,
      password1: data?.password1,
      password2: data?.password1,
      first_name: data.username?.toString().split(" ")[0],
      last_name: data.username?.toString().split(" ")[1],
      is_fan: data?.is_fan,
      is_scout: data?.is_scout,
      is_player: data?.is_player,
      is_trainer: data?.is_trainer,
      phone: data.phone,
      birthdate: new Date().toISOString().slice(0, 10), //wstawiam jakąkolwiek
      language: 0,
      auto_update_lang: false
    };

    try {
      const url = "https://api.dev.footballchallengeapp.com/auth/registration/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(dataModel),
        headers: { "Content-Type": "application/json" }
      });
      const jsonResponse = await response.json();
      jsonResponse.password1 !== undefined ? (setCurrentScreen(4),
        setPasswordError(jsonResponse.password1)) : null;
      jsonResponse.email !== undefined ? (setCurrentScreen(3),
        setEmailError(jsonResponse.email)) : null;
      jsonResponse.phone !== undefined ? (setCurrentScreen(2),
        setPhoneError(jsonResponse.phone)) : null;
      jsonResponse.first_name !== undefined ? (setCurrentScreen(1),
        setNameError(jsonResponse.first_name)) : null;
      jsonResponse.last_name !== undefined ? (setCurrentScreen(1),
        setNameError(jsonResponse.last_name)) : null;
      jsonResponse.detail === "Email weryfikacyjny został wysłany." ? (
        setSuccesMsgId(jsonResponse.user_id), setSuccesMsg(jsonResponse.detail),
        reset(defaultObject), setCurrentScreen(6)) : null;
      console.log("Response Body -> " + JSON.stringify(jsonResponse, null, 5));
      return jsonResponse;
    }
    catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }


  return (
    <CSafeAreaView >
      <Image style={styles.image} source={require('./../../assets/images/Background_img.png')} />
      <View style={styles.content}>
        <NavComponent goBack={goBack} />
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.card}>
            <Banner />
            {currentScreen === 1 && <NamePage nameError={nameError} currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen} control={control} />}
            {currentScreen === 2 && <PhonePage phoneError={phoneError} currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen} control={control} />}
            {currentScreen === 3 && <EmailPage emailError={emailError} currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen} control={control} />}
            {currentScreen === 4 && <PasswordPage passwordError={passwordError} currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen} control={control} />}
            {currentScreen === 5 && <>
              <Text >{texts.accType}</Text>
              <Text>{texts.accInfo}</Text>
              <View >
                <TouchableOpacity onPress={handleSubmit((data) => onSubmit({ ...data, is_trainer: true }))}>
                  <Text>{texts.trainer}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit((data) => onSubmit({ ...data, is_player: true }))}>
                  <Text>{texts.player}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit((data) => onSubmit({ ...data, is_fan: true }))}>
                  <Text>{texts.fan}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit((data) => onSubmit({ ...data, is_scout: true }))}>
                  <Text>{texts.scout}</Text>
                </TouchableOpacity>
                <TermsOfService />
              </View>
            </>}
            {currentScreen === 6 && <RegisteredConfirmationPage succesMsgId={succesMsgId} succesMsg={succesMsg} />}
            <View>
              <Text>{texts.step}</Text>
              {currentScreen < 5 && <Text>{currentScreen}/{texts.pageCount}</Text>}
            </View>
            <Button title={texts.next} onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </CSafeAreaView >
  );
}

export default React.memo(Register);