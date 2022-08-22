import styled from 'styled-components'

// Estilos Conhecimento
export const ExcluirConteiner = styled.View`
    width: 100%;
    flex-direction: row;
    border-radius: 5px;
    margin-bottom: 10px;
`
export const Descricao = styled.Text`
    flex: 1;
    height: 56px;
    text-align: center;
    padding: 12px;
    font-size: 16px;
    background-color: #262626;
    color: #f5f3f4;
    margin-right: 12px;
    border-radius: 5px;
`
export const Botao = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #7a0213;    
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`
export const BotaoTexto = styled.Text`
    color: #f5f3f4;
    font-size: 28px;
    font-weight: bold;
`