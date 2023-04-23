import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Controller } from 'react-hook-form';

type PasswordPageProps = {
    currentScreenHandler: () => void;
    control: any;
};


const PasswordPage = ({ currentScreenHandler, control }: PasswordPageProps,) => {

    return (
        <View >
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
            <Button title="Dalej" onPress={currentScreenHandler} />
        </View>
    )
}

export default PasswordPage;