import {Text, View} from "react-native";
import {TextField} from "../components/TextField.tsx";

export function SigninPage() {
    return (
        <View style={{marginVertical: 25, marginHorizontal: 25}}>

            <Text style={{fontSize: 35, color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Sign In</Text>

            <View style={{marginTop: 45}}>
                <TextField/>
            </View>

        </View>
    );
}