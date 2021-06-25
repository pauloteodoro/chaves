import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    StyleSheet,
    View,
} from 'react-native';

import Item from '../../components/Item'


export default function index({ navigation }) {
    const [busca, setBusca] = useState('');
    const [listaPersonagens, setListaPersonagens] = useState([]);



    function renderTelaCadastro() {
        navigation.navigate('Cadastro')
    };

    useEffect(BuscarListaPersonagens, [])

    // funcao para listar todos os persongens para listar no flatlist
    function BuscarListaPersonagens() {
        api.get('/listar-personagens',).then((response) => {
            setListaPersonagens(response.data.lista)
        });
    }


    //funcao para  buscar personagem pelo usuario id para abrir tela de atualização personagem faltou cologar navigation
    function BuscarPersonagem() {
        api.post('/login', {
            usuarioId: busca
        }).then((response) => {
            if (response.data.ok) {
                setExibirMensagemErro(false)
                navigation.navigate('Home')
            }
            else {
                setMensagemErro(response.data.mensagemErro)
                setExibirMensagemErro(true)
            }
        });
    };





    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.field}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        onChangeText={text => setBusca(text)}
                        value={task}
                    />
                    <TouchableWithoutFeedback onPress={BuscarPersonagem}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>


                <FlatList
                    data={listaPersonagens}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />

            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        fontSize: 15,
        color: '#333',
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#00cc99',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fdfdfd',
        width: ' 100 %',
        alignItems: 'center',
        justifyContent: 'center'

    },
    item: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        marginTop: 15,
        borderRadius: 3,
    },
    form: {
        flexDirection: 'row',
    },
});
