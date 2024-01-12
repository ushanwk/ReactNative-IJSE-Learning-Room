/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView, Text, TextInput,
} from 'react-native';
import {CustomTitle} from "./src/components/CustomTitle.tsx";
import {SignUpForm} from "./src/components/SignUpForm.tsx";


function App(): React.JSX.Element {

    const [ title, setTitle ] = useState('IJSE');

  return (
    <SafeAreaView>
        {/*<TextInput*/}
        {/*    style={{borderColor: 'blue', borderWidth: 1, margin: 5}}*/}
        {/*    value={title}*/}
        {/*    onChange={(e)=>{setTitle(e.nativeEvent.text)}}*/}
        {/*/>*/}

        {/*<CustomTitle title={"Hello IJSE"} subTitle={"Sub 1"}/>*/}
        {/*<CustomTitle title={"Hello IJSE"} subTitle={"Sub 1"} marginBottom={55}/>*/}
        {/*<CustomTitle title={"Hello IJSE"} subTitle={"Sub 1"}/>*/}

        <SignUpForm/>
    </SafeAreaView>
  );
}

export default App;
