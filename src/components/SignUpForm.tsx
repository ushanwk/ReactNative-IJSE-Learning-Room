import React, {useState} from "react";
import {Text, TextInput, View} from "react-native";
import {InputField} from "./InputField.tsx";


export const SignUpForm = () => {

    const [name, setName] = useState("");

    return (
        <View style={{margin: 30}}>
            <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 10, color: 'black', fontWeight: 'bold', marginBottom: 30}}>Sign Up Form</Text>

            <InputField
                label="First Name"
                onChange={()=>{}}
                error="Error"
            />

            <InputField
                label="Last Name"
                onChange={()=>{}}
                error="Error"
            />
        </View>
    );
};