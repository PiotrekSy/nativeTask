import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Controller } from 'react-hook-form';

type EmailPageProps = {
    currentScreenHandler: () => void;
    control: any;
};

const EmailPage = ({ currentScreenHandler, control }: EmailPageProps,) => {

    return (
        <View>
            <Text>Email</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        placeholder="Wpisz swój email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            {/* {errors.email && <Text >This is required.</Text>} */}
            <Button title="Dalej" onPress={currentScreenHandler} />
        </View>
    )
}

export default EmailPage;