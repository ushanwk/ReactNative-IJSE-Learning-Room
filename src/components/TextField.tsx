import {Text, TextInput, View} from "react-native";
import React from "react";

type TextFieldProps = {
    label: string;
    value: string;
    setValue: (value: string)=>void
}

export function TextField(props:TextFieldProps) {
    return (
        <View style={{marginBottom: 30}}>
            <Text style={{marginLeft: 4, marginBottom: 8, color: 'black'}}>{props.label}</Text>

            <TextInput
                style={{borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10}}
                value={props.value}
                onChange={(event)=>{props.setValue(event.nativeEvent.text)}}
            />
        </View>
    );
}