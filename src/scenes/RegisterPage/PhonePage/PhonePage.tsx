import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Controller } from 'react-hook-form';

type PhonePageProps = {
    currentScreenHandler: () => void;
    control: any;
};

const PhonePage = ({ currentScreenHandler, control }: PhonePageProps) => {

    return (
        <View>
            <Text>Telefon</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Wpisz swój numer telefonu"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="phone"
            />
            <Button title="Dalej" onPress={currentScreenHandler} />
        </View>
    )
}

export default PhonePage;