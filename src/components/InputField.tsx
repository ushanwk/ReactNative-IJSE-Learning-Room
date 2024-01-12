import {Text, TextInput, View} from "react-native";
import {useState} from "react";


interface InputFieldProps {
    label: string;
    error?: string;
    value: string;
    getText: (value: string) => void
}

export const InputField = ({label, error, value, getText}: InputFieldProps) => {

    return (
        <View style={{marginTop: 20}}>
            <Text style={{marginBottom: 10, marginLeft: 5, color: 'black'}}>{label}</Text>

            <TextInput
                style={{borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10}}
                value={value}
                onChange={
                    (text)=>getText(text.nativeEvent.text)
                }

            />

            {
                error?(<Text style={{color: 'red', marginTop: 4, marginLeft: 5}}>{error}</Text>):null
            }

        </View>
    );
};