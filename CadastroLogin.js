    import { Text, TextInput, View } from "react-native-web";
    import { useNavigation } from "@react-navigation/native";
    import { Button } from "react-native-web";
    import { StyleSheet } from "react-native";
    import { useState } from 'react';

    export function CadastroLogin () {
        const navigation = useNavigation();
        const [dataNascimento, setDataNascimento] = useState('');
        const [idade, setIdade] = useState('');
        //CRIANDO A O ALERT DA FINALIZAÇÃO DO CADASTRO
        const [nome, setNome] = useState('');
        const [cpf, setCpf] = useState('');
        const [turma, setTurma] = useState('');
        const [periodo, setPeriodo] = useState('');

        //CRIANDO A CALCULADORA DE IDADE
        const calcularIdade = () => {
        // espera que a pessoa digite no formato DD/MM/AAAA
        const partes = dataNascimento.split('/');
        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]);
        const ano = parseInt(partes[2]);

        const nascimento = new Date(ano, mes - 1, dia);
        const hoje = new Date();
        let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
        const aindaNaoFezAniversario =
            hoje.getMonth() < nascimento.getMonth() ||
            (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate());

        if (aindaNaoFezAniversario) {
            idadeCalculada = idadeCalculada - 1;
        }

        setIdade(idadeCalculada);
    };


    const finalizarCadastro = () => {
        alert(
            "Nome: " + nome + "\n" +
            "Data de nascimento: " + dataNascimento + "\n" +
            "Idade: " + idade + "\n" +
            "CPF: " + cpf + "\n" +
            "Turma: " + turma + "\n" +
            "Período: " + periodo
        );
    };

    const voltarParaLogin = () => {
    navigation.navigate("Login");
    };  

        return (
            <View style={style.container}>
                <Text style={style.label}> NOVO CADASTRO : </Text>
                <TextInput
                style={style.input}
                placeholder="Digite seu nome: "
                placeholderTextColor={'#c72f2f'}
                textAlign = 'center'
                value={nome}
                onChangeText={setNome}  
                />
                <Text style={style.label}> DIGITE SUA DATA DE NASCIMENTO (DD/MM/AAAA): </Text>
                <TextInput
                style={style.input}
                placeholder="Ex: 15/03/2005"
                placeholderTextColor={'#c72f2f'}
                textAlign='center'
                value={dataNascimento}
                onChangeText={setDataNascimento}
                />
                
                <br></br>
                <Button color='#aa1212' title='Calcular idade' onPress={calcularIdade} />

                <Text style={style.label}> SUA IDADE APARECERÁ AQUI: </Text>
                <TextInput 
                style={style.input}
                placeholder=" "
                placeholderTextColor={'#c72f2f'}
                textAlign= 'center'
                value={idade !== '' ? String(idade) : ''}
                />
            


                <Text style={style.label}> DIGITE SEU CPF: </Text>
                <TextInput 
                style={style.input}
                placeholder="Digite a seu CPF:"
                placeholderTextColor={'#c72f2f'}
                textAlign= 'center'
                value={cpf}
                onChangeText={setCpf}
                />
                <Text style={style.label}> DIGITE SUA TURMA: </Text>
                <TextInput 
                style={style.input}
                placeholder="Digite a sua turma:"
                placeholderTextColor={'#c72f2f'}    
                textAlign= 'center'
                value={turma}
                onChangeText={setTurma}
                />
                <Text style={style.label}> DIGITE O PERIODO: </Text>
                <TextInput 
                style={style.input}
                placeholder="Digite o período:"
                placeholderTextColor={'#c72f2f'}
                textAlign= 'center'
                value={periodo}
                onChangeText={setPeriodo}
                />

                <br></br>
                <Button color='#aa1212' title='FINALIZAR CADASTRO' onPress={finalizarCadastro}></Button>
                <br></br>
                <br></br>
                <Button color='#bb42428a' title='VOLTAR' onPress={voltarParaLogin} />

</View>
        );
    }const style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
},
        label: {
            color: '#360f0f',
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
    })