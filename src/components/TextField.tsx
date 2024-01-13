import {Text, TextInput, View} from "react-native";
import React from "react";

type TextFieldProps = {

}

export function TextField() {
    return (
        <View>
            <Text style={{marginLeft: 4, marginBottom: 8, color: 'black'}}>Username</Text>

            <TextInput
                style={{borderColor: 'gray', borderWidth: 1, borderRadius: 10}}
            />
        </View>
    );
}