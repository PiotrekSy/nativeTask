import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Controller } from 'react-hook-form';

type NamePageProps = {
    currentScreenHandler: () => void;
    control: any;
};

const NamePage = ({ currentScreenHandler, control }: NamePageProps,) => {

    return (
        <View>
            <Text>Imię i nazwisko</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Imię i nazwisko oddzielone spacją"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="username" />
            <Button title="Dalej" onPress={currentScreenHandler} />
        </View>
    )
}

export default NamePage;