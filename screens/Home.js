import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import {MaterialIcons} from '@expo/vector-icons';

export default function Home({navigation}) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews]= useState([
        {
            title: 'Pokemon', 
            rating: 5,
            body: 'Pokemon its a good game',
            key: 1
        },
        {
            title: 'Warzone', 
            rating: 2,
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
        
        <Modal visible={modalOpen} animationType='slide'>
            <View style={ {...globalStyles.modalContent, ...styles.modalClose}} >
                <MaterialIcons
                    style={globalStyles.modalToggle}
                    name="close"
                    size={24}
                    onPress={()=>{setModalOpen(false)}}
                />
                <Text>Hello from the modal</Text>
            </View>

        </Modal>
        <MaterialIcons
            name="add"
            size={24}
            onPress={()=>{setModalOpen(true)}}
            style={globalStyles.modalToggle}
        />

        <FlatList 
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <Card>
                        <Text style={globalStyles.title} onPress={()=> navigation.navigate('Details', item)}>
                            {item.title}
                        </Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})