import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { Flex, Icon, Pressable } from 'native-base';
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import * as React from 'react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useForm, Controller } from "react-hook-form";

const Register: FC = () => {
  const { t } = useTranslation();
  // const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();

  type FormData = {
    name: string;
    phone: string;
    email: string;
    password: string;
    accountType: string;
  };

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: Object) => {
    setCurrentScreen(1)
    console.log(data);
    reset({
      name: "",
      phone: "",
      email: "",
      password: "",
      accountType: "",
    })
  }
  const [currentScreen, setCurrentScreen] = useState(1)

  const currentScreenHandler = () => {
    currentScreen !== 5 ? setCurrentScreen(currentScreen + 1) : console.log('zarejestrowano')
  }

  return (
    <CSafeAreaView >



      {/* NAWIGACJA Z TYTULEM */}
      <View>
        <Pressable onPress={goBack} style={styles.navigationElement}>
          <Text > BACK </Text >
        </Pressable>
        <Text>FC APP</Text>
      </View>


      {/* TWORZENIE KONTA */}
      <View >
        <Text > Utwórz konto </Text >
      </View>


      {/* IMIE I NAZWISKO */}
      <View>
        <Text>Imię i nazwisko</Text>
        <Text>{currentScreen}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Imię:"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text >This is required.</Text>}
        <Button title="Dalej" onPress={currentScreenHandler} />
      </View>


      {/* TELEFON */}
      <View>
        <Text>Telefon</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput
              placeholder="Wpisz numer telefonu"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
        />
        {errors.phone && <Text >This is required.</Text>}
        <Button title="Dalej" onPress={currentScreenHandler} />
      </View>



      {/* EMAIL  */}
      <View>
        <Text>Email</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput
              placeholder="Nazwisko"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text >This is required.</Text>}
        <Button title="Dalej" onPress={currentScreenHandler} />
      </View>


      {/* HASŁO */}
      <View>
        <Text>Password</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Podaj hasło"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text >This is required.</Text>}
        <Button title="Dalej" onPress={currentScreenHandler} />
      </View>


      {/* HASŁO */}
      <View>
        <Text>Wybierz rodzaj konta</Text>
        <Text>Wybierz rodzaj swojego konta. W późniejszym etapie będzie moliwośzmiany lub dodania innych typów konta.</Text>
        <Controller
          name="types"
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onBlur, value } }) => (
            <View>
              <Pressable onPress={onSubmit} onBlur={onBlur} >
                <View  >
                  <Text>Trener</Text>
                </View>
              </Pressable>
              <View>
                <Pressable onPress={onSubmit} onBlur={onBlur} >
                  <View  >
                    <Text>Zawodnik</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={onSubmit} onBlur={onBlur} >
                  <View  >
                    <Text>Kibic</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={onSubmit} onBlur={onBlur} >
                  <View  >
                    <Text >Organizator</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}
        />

        <Text>Wybierz rodzaj swojego konta. W późniejszym etapie będzie moliwośzmiany lub dodania innych typów konta.</Text>
        <Text>Terms of use</Text>

      </View>




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
