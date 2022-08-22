import styled from 'styled-components';

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
    flex: 1;
    height: 56px;
    background-color: #00193a;
    color: #fff;
    border-radius: 5px;
    padding: 16px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 12px;
    border-width: 2px;
    border-color: #034780;
`
export const Botao = styled.TouchableOpacity`
    width: 56;
    height: 56;
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
    margin-top: 36px;
    margin-bottom: 42px;
`
export const ListaVazia = styled.Text`
    color: #f7788d;
    font-size: 16px;
    text-align: center;
`