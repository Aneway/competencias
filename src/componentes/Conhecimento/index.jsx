import React, { View, Text, TouchableOpacity } from "react-native";
import { ExcluirConteiner, Descricao, Botao, BotaoTexto } from './estilo'

export function Conhecimento({ nome, excluir }){
    return(
        <ExcluirConteiner>

            <Descricao>{nome}</Descricao>

            <Botao
                onPress={excluir}
            >
                <BotaoTexto>-</BotaoTexto>
            </Botao>

        </ExcluirConteiner>
    )    
}
