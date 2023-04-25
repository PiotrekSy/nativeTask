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
import { SvgXml } from 'react-native-svg';
import { backgroundLogoXml } from './../../assets/images/BackgroundLogo';
// import { playerXml } from '@assets/images/playerImage';
// import { trainerXml } from '@assets/images/trainerImage';
// import { fanXml } from '@assets/images/fanImage';
// import { scoutXml } from '@assets/images/scoutImage';

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
      <Image style={styles.image} source={require('./../../assets/images/Background_img.png')} alt={"backgroundImg"} />
      <View style={styles.content}>
        <NavComponent goBack={goBack} />
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.card}>
            <Banner />
            {currentScreen === 1 && <NamePage nameError={nameError} control={control} />}
            {currentScreen === 2 && <PhonePage phoneError={phoneError} control={control} />}
            {currentScreen === 3 && <EmailPage emailError={emailError} control={control} />}
            {currentScreen === 4 && <PasswordPage passwordError={passwordError} control={control} />}
            {currentScreen === 5 &&
              <View style={styles.form}>
                <SvgXml xml={backgroundLogoXml} height='100%' width="110%" style={styles.backgroundSignature} />
                <View style={styles.cardContainer}>
                  <Text style={styles.banner}>{texts.accType}</Text>
                  <Text style={styles.text}>{texts.accInfo}</Text>
                  <TouchableOpacity style={styles.option}
                    onPress={handleSubmit((data) => onSubmit({ ...data, is_trainer: true }))}>
                    <View style={styles.optionImage}>
                      {/* <SvgXml xml={trainerXml} height='110%' width="100%" style={styles.typeSvg} /> */}
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{texts.trainer}</Text>
                      <Text style={styles.description}>{texts.trainerDescription}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}
                    onPress={handleSubmit((data) => onSubmit({ ...data, is_player: true }))}>
                    <View style={styles.optionImage}>
                    {/* <SvgXml xml={playerXml} height='110%' width="100%" style={styles.typeSvg} /> */}
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{texts.player}</Text>
                      <Text style={styles.description}>{texts.playerDescription}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}
                    onPress={handleSubmit((data) => onSubmit({ ...data, is_fan: true }))}>
                    <View style={styles.optionImage}>
                    {/* <SvgXml xml={fanXml} height='110%' width="100%" style={styles.typeSvg} /> */}
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{texts.fan}</Text>
                      <Text style={styles.description}>{texts.fanDescription}</Text></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}
                    onPress={handleSubmit((data) => onSubmit({ ...data, is_scout: true }))}>
                    <View style={styles.optionImage}>
                    {/* <SvgXml xml={scoutXml} height='110%' width="100%" style={styles.typeSvg} /> */}
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{texts.scout}</Text>
                      <Text style={styles.description}>{texts.scoutDescription}</Text>
                    </View>
                  </TouchableOpacity>
                  <TermsOfService />
                </View>
              </View>}
            {currentScreen === 6 && <RegisteredConfirmationPage succesMsgId={succesMsgId} succesMsg={succesMsg} />}
            {currentScreen < 5 && <>
              <View style={styles.statusBar}>
                <Text style={styles.counterText}>{texts.step}</Text>
                <Text style={styles.counter}>{currentScreen}/{texts.pageCount}</Text>
              </View>
              <View style={styles.progressBarBack}>
                <View style={{ height: '100%', position: 'absolute', width: `${currentScreen * 25}%`, backgroundColor: '#9386E9' }} />
              </View>
              <Button title={texts.next} onPress={() => currentScreenHandler({ currentScreen, setCurrentScreen })} />
            </>}
          </View>
        </KeyboardAvoidingView>
      </View>
    </CSafeAreaView >
  );
}

export default React.memo(Register);