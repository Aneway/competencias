import styled from 'styled-components';
import RadioForm from 'react-native-simple-radio-button';
import {MaterialIcons} from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker'

// Estilos Inicial

export const Conteiner = styled.View`
    flex: 1; 
    background-color: #000;
`
export const Titulo = styled.Text`
    background-color: #660708;
    color: #f5f3f4;
    font-size: 24px;
    font-weight: bold;
    padding-top: 12px;
    text-align: center;
    margin-top: 50px;
`
export const SubTitulo = styled.Text`
    background-color: #660708;
    color: #f7788d;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 12px;
    text-align: center;
`

export const Campo = styled.TextInput.attrs({
    placeholder: "Informe a competência",
    placeholderTextColor: '#0565b3'
})`
    height: 56px;
    margin-top: 15px;
    background-color: #00193a;
    color: #fff;
    border-radius: 5px;
    padding: 16px;
    font-size: 18px;
    font-weight: 400;
    border-width: 2px;
    border-color: #034780;
`
export const Botao = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #034780;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`
export const BotaoTexto = styled.Text`
    color: #f5f3f4;
    font-size: 28px;
    font-weight: bold;
`

export const AdicaoConteiner = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 15px;
    /* margin-bottom: 15px; */
`
export const ListaVazia = styled.Text`
    color: #f7788d;
    font-size: 16px;
    text-align: center;
`

export const Lista = styled.FlatList`
    margin-top: 12px;
`
// export const Niveis = styled(RadioForm).attrs({
//     buttonColor: '#052f52',
//     labelColor: '#052f52',
//     selectedButtonColor: '#0564b3',
//     selectedLabelColor: '#0564b3',
//     labelStyle: {
//         fontSize: 18,
//         marginTop: 6,
//         marginBottom: 12,
//     }
// })

export const Icone = styled(MaterialIcons)`
    color: #f5f3f4;
    font-size: 28px;
    font-weight: bold;
`