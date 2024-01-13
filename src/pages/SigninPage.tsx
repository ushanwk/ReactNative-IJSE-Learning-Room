import {Alert, Text, View} from "react-native";
import {TextField} from "../components/TextField.tsx";
import {useState} from "react";
import {Button} from "../components/Button.tsx";

export function SigninPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{marginVertical: 25, marginHorizontal: 25}}>

            <Text style={{fontSize: 35, color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Sign In</Text>

            <View style={{marginTop: 45}}>
                <TextField
                    label="Username"
                    value={username}
                    setValue={(value)=>{setUsername(value)}}
                />

                <TextField
                    label="Password"
                    value={password}
                    setValue={(value)=>{setPassword(value)}}
                />
            </View>

            <Button
                label="Sign In"
                onClicked={() => {
                    if(username === "Ushan" && password === "1234"){
                        Alert.alert("Login Successful")
                    }else{
                        Alert.alert("Something went wrong...")
                    }
                }}
            />

        </View>
    );
}