import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {InputField} from "./InputField.tsx";


export const SignUpForm = () => {

    const [Fname, setFname] = useState('');

    return (
        <View style={{margin: 30}}>
            <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 10, color: 'black', fontWeight: 'bold', marginBottom: 30}}>Sign Up Form</Text>

            <InputField
                label="First Name"
                value={Fname}
                getText={(value)=>{
                    setFname(value)
                }}

            />

            <Button
                title="Submit"
                onPress={()=>{
                    console.log(Fname)
                }}
            />
        </View>
    );
};