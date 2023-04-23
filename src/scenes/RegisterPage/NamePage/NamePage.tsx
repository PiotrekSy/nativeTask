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
                // rules={{ required: false }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Imię:"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name" />
            <Button title="Dalej" onPress={currentScreenHandler} />
        </View>
    )
}

export default NamePage;