import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Home } from './Home';
import { CadastroLogin } from './CadastroLogin'

export  function Login() {

    const navigation = useNavigation();
    const [Login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    /* useEffect(()=>{
    console.log(Login)
    console.log(senha)
    },[senha]); 
    */


    const fazerLogin = () => {
        if (Login.toLowerCase() == "matheus" && senha == "1234") {
        /* setMensagem("Seja bem vindo " + Login);*/
            navigation.navigate("Home", {nome:"Gabriel",idade:"33"});
        } else {
            setLogin('');
            setSenha('');
            setMensagem("Usuário e/ou senha incorretos!!! ");
        }
        /*alert("Seu login é: " + Login + "----" + "Sua senha é: " + senha)*/
    };

    const irparacadastro = () => {
        navigation.navigate("CadastroLogin");
    };

    return (

        <View style={styles.container}>

            <Image
                style={styles.imagemFundo}
                source={{ uri: "https://i.pinimg.com/1200x/a4/49/ab/a449ab4ad4108830d445525c751f5fd6.jpg" }}
            />


            <Image
                style={styles.logo}
                source={{ uri: "https://a.espncdn.com/i/teamlogos/soccer/500/874.png" }}
            />

            <Text style={styles.titulo}>
                O MAIOR DO MUNDO TE DÁ BOAS-VINDAS !
            </Text>

            <Text style={styles.label}>Login:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu usuário:'
                placeholderTextColor='#999999'
                value={Login}
                onChangeText={(texto) => setLogin(texto.toLowerCase())}
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite sua senha:'
                placeholderTextColor='#999999'
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            

            <br></br>
            <Button color='#aa1212' title='CONFIRMAR' onPress={fazerLogin} > </Button>
            <br></br>
            <Button color='#aa1212' title='CADASTRAR CLIENTE ' onPress={irparacadastro} />
            <br></br>
            <Text style={styles.erro} > {mensagem}</Text>


            <StatusBar style="auto" />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111013',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#E4002B',
        boxShadow: 'inset 0 0 10px 6px #E4002B, 0 0 30px 5px #E4002B',
    },
    logo: {
        width: 250,
        height: 250,
    },
    titulo: {
        fontFamily: 'Rajdhani',
        fontSize: 40,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 2,
        textShadowColor: '#E4002B',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    label: {
        color: '#cccccc',
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 4, // ajusta conforme a largura do input
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#E4002B',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: '#ffffff',
        backgroundColor: '#1A1A1A',
        fontSize: 16,
        width: 250,
        marginTop: 4,

        shadowColor: '#E4002B',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
    },
    erro: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#aa1212',
        textAlign: 'center',
        marginBottom: 40,
    },
    imagemFundo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        opacity: 0.08, // quanto menor, mais transparente
        resizeMode: 'cover', // ou 'cover', dependendo do efeito que quiser
        pointerEvents: 'none',
    },
});