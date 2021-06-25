import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import api from '../../services/api';


export default function index({ item }) {




    return (
        <View style={styles.container} >

            <TouchableOpacity style={styles.button} onPress={() => renderEditar()}>

                <Image source={item.foto}></Image>
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    button: {
        width: '100px',
        backgroundColor: 'gray',
        borderRadius: '2px'
    },

});


