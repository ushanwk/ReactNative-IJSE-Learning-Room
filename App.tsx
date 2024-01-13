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
import {SigninPage} from "./src/pages/SigninPage.tsx";


function App(): React.JSX.Element {

    const [ title, setTitle ] = useState('IJSE');

  return (
    <SafeAreaView>
        <SigninPage/>
    </SafeAreaView>
  );
}

export default App;
