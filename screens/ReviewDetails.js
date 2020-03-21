import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}> 
            <Text style={globalStyles.title}>
                ReviewDetails
            </Text>      
            <Button title="Go back" onPress={pressHandler} />       
        </View>
    )
}


