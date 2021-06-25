import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import chaves from '../../assets/chaves.png'
import api from '../../services/api';


export default function index({ navigation }) {



    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [exibirMensagemErro, setExibirMensagemErro] = useState(false);
    const [MensagemErro, setMensagemErro] = useState(false);


    //  Aqui onde tenho minha função de login onde api retornaria um ok caso senha e login estivem ok
    //  caso ok redirecionaria meu usuario para tela de principal, 
    //  caso não uso useState para preencher a mensagem de erro de acordo com o erro , e exibo ela em tela

    function Login() {
        api.post('/login', {
            usuario: usuario,
            senha: senha,
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
        <View style={styles.container}>

            <StatusBar style="auto" />

            <View style={styles.loginForm}>
                <Image source={chaves} style={{ width: 305, height: 159 }} />
                <Text>CHAVES MOVEL</Text>

                <TextInput
                    style={styles.loginInput}
                    placeholder='Usuário:'
                    onChangeText={text => setUsuario(text)}
                />
                <TextInput
                    style={styles.loginInput}
                    placeholder='Senha:'
                    secureTextEntry={true}
                    onChangeText={text => setSenha(text)}
                />

                {
                    exibirMensagemErro
                        ?
                        <Text style={styles.loginMsgErro}>Acesso não permitido</Text>
                        :
                        ''
                }

                <TouchableOpacity style={styles.loginButton} onPress={() => Login()}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    loginMsgErro: {
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
    },
    loginForm: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loginInput: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        border: '1px solid black',
        width: 200,
    },
    loginButton: {
        width: 200,
        padding: 12,
        backgroundColor: "gray",
        alignSelf: "center",
        borderRadius: 2,
    },
    loginButtonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#333",
        textAlign: "center"
    }
});


