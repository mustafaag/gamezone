import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    
    const pressHandler = () => {
        navigation.navigate('Details');
    }

    return (
        <View style={ globalStyles.container}> 
            <Text style={globalStyles.title}>
                 Home
            </Text> 
            <Button title="rev detail" onPress={pressHandler} />
        </View>
    )
}

