import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Conhecimento } from '../../componentes/Conhecimento';

import { Conteiner, Titulo, SubTitulo, Campo, Botao, BotaoTexto, AdicaoConteiner, ListaVazia} from './estilo'

interface tipoCompetencia {
    codigo: string
    descricao: string
    nivel?: string // O INTERROGACAO SIGNIFICA Q O CAMPO PODE SER NULO
} 

export function Inicial(){

    const [descricao, setDescricao] = useState('')
                                                    // TIPO DO ARRAY   || INICIALIZANDO O ARRAY
    const [competencias, setCompetencias] = useState<tipoCompetencia[]>([])

    function adicionarCompetencia(){

        const novaCompetencia = {
            codigo: String(new Date().getTime()),
            descricao: descricao
        }
        if(typeof(competencias.find(competencia => competencia.descricao == novaCompetencia.descricao)) !== "undefined"){
            return Alert.alert('Duplicidade', 'A competência já existe!')

        }

        // if(competencias.includes(novaCompetencia)){
        //    return Alert.alert('Duplicidade', 'A competência já existe!')
        // }

        setCompetencias([...competencias, novaCompetencia])
        setDescricao('')
    }

    function excluirCompetencia(item: tipoCompetencia){
        
        Alert.alert('Remover', `Excluir a competencia ${item.descricao}?`, [
            {
                text: 'Sim',
                onPress: () => setCompetencias( competencias.filter( 
                    itensAtuais => itensAtuais.descricao !== item.descricao
                ))
            },
            {
                text: 'Não',  
                style: 'cancel' 
            }
        ])
    }

    return(
        <Conteiner>
            
            <Titulo>Competências</Titulo>
            <SubTitulo>Seus conhecimentos</SubTitulo>

            <AdicaoConteiner>

                <Campo
                    onChangeText={setDescricao}
                    value={descricao}
                />

                <Botao
                    onPress={adicionarCompetencia}
                >
                    <BotaoTexto>+</BotaoTexto>
                </Botao>

            </AdicaoConteiner>

            <FlatList 
                data={competencias}
                keyExtractor={ item => item.codigo }
                renderItem={ ({item}) => 
                    <Conhecimento 
                        nome={item.descricao} 
                        excluir={ () => excluirCompetencia(item) }
                    /> 
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <ListaVazia>
                        Nenhuma competência informada.
                    </ListaVazia>
                )}
            />

        </Conteiner>
    )
}