import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';


export default function index() {
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />

            <Text>ADICIONAR PERSONAGEM</Text>

            <TextInput
                style={styles.InputNome}
                placeholder='Nome'
            />
            <TextInput
                style={styles.InputDescricao}
                placeholder='Descrição'
            />
            <TouchableOpacity style={styles.button} onPress={() => renderTelaHome()}>
                <Text style={styles.login__buttonText}>Tirar Foto</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => renderTelaHome()}>
                <Text style={styles.login__buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    button: {
        width: '100px',
        backgroundColor: 'gray',
        borderRadius: '2px'
    },
    InputNome: {
        height: '50px',
        border: '1px solid black',
        borderRadius: '2px'


    },
    InputDescricao: {
        height: '150px',
        border: '1px solid black',
        borderRadius: '2px'
    }

});


