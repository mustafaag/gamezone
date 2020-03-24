import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const [reviews, setReviews]= useState([
        {
            title: 'Pokemon', 
            rating: 5,
            body: 'Pokemon its a good game',
            key: 1
        },
        {
            title: 'Warzone', 
            rating: 5,
            body: 'Warzone its a good game',
            key: 2
        },
        {
            title: 'Fortnite', 
            rating: 5,
            body: 'Fortnite its a good game',
            key: 3
        },
    ])

    return (
        <View style={ globalStyles.container}> 
        <FlatList 
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <Text style={globalStyles.title} onPress={()=> navigation.navigate('Details', item)}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}

