import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Home({ route }) {

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.titulo}>ESSA É A TELA HOME</Text>

            <Text style={style.label}>
                BEM VINDO {route.params.nome} - SUA IDADE É {route.params.idade}
            </Text>
            {/* criei uma view pra colocar um botão lateral */}
            <View style = {style.lateral}> 
            <Button color='#aa1212' title='Voltar' onPress={() => navigation.goBack()} />
            <Button color={'#aa1212'}  title='botalo' onPress={() => navigation.canGoBack()}></Button>
            </View>


            <StatusBar style="auto" />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111013',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
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
        marginBottom: 20,
    },
    lateral: {
        flexDirection:'row',
        justifyContent: 'center', gap: 10,
    },
});