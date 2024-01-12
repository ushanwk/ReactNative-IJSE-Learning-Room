import {Text, TextInput, View} from "react-native";


interface InputFieldProps {
    label: string;
    onChange : {};
    error?: string;
}

export const InputField = ({label, onChange, error}: InputFieldProps) => {
    return (
        <View style={{marginTop: 20}}>
            <Text style={{marginBottom: 10, marginLeft: 5, color: 'black'}}>{label}</Text>

            <TextInput
                style={{borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10}}
                value=""
                onChange={()=>onChange}
            />

            {
                error?(<Text style={{color: 'red', marginTop: 4, marginLeft: 5}}>{error}</Text>):null
            }

        </View>
    );
};