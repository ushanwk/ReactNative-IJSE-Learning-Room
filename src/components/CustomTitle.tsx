import {Text} from "react-native";
import React from "react";

export const CustomTitle = ({title, subTitle, marginBottom = 15}: {title: string, subTitle: string, marginBottom?: number}) => {
    return (
       <>
           <Text style={{fontSize: 35, textAlign: 'center'}}>{title}</Text>
           <Text style={{fontSize: 15, textAlign: 'center', marginBottom: marginBottom}}>{subTitle}</Text>
       </>
    );
};