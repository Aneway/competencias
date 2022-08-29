import React, { View, Text, TouchableOpacity } from "react-native";
import { ExcluirConteiner, Descricao, Botao, BotaoTexto, Icone} from './estilo'

export function Conhecimento({ nome, nivel, excluir }){
    return(
        <ExcluirConteiner>

            <Descricao>{`${nome} \n ${nivel}`}</Descricao>

            <Botao
                onPress={excluir}
            >
                <Icone name="delete"/>
            </Botao>

        </ExcluirConteiner>
    )    
}
