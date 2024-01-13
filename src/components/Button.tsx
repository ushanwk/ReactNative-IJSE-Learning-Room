import {Text, Touchable, TouchableOpacity, View} from "react-native";

type ButtonProps = {
    label: string;
}

export function Button(props: ButtonProps) {
    return (
        <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
                onPress={()=>{}}
                style={{width: 300, borderRadius: 10, backgroundColor: 'black'}}
            >
                <Text style={{color: 'white', textAlign: 'center', justifyContent: 'center', padding: 10}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}