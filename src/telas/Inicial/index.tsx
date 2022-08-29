import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Conhecimento } from '../../componentes/Conhecimento';
import {Picker} from '@react-native-picker/picker'
import uuid from 'react-native-uuid';
import 'react-native-get-random-values'
import { Conteiner, Titulo, SubTitulo, Campo, Botao, BotaoTexto, AdicaoConteiner, ListaVazia, Lista, Icone} from './estilo';


interface tipoCompetencia {
    codigo: string
    descricao: string
    nivel: string // O INTERROGACAO SIGNIFICA Q O CAMPO PODE SER NULO
}

var niveis = [
    {label: 'Básico', value: 'Básico' },
    {label: 'Intermediário', value: 'Intermediário' },
    {label: 'Avançado', value: 'Avançado' }
  ];

export function Inicial(){

    const [descricao, setDescricao] = useState('')
    const [nivel, setNivel] = useState('')
                                                    // TIPO DO ARRAY   || INICIALIZANDO O ARRAY
    const [competencias, setCompetencias] = useState<tipoCompetencia[]>([])


    function adicionarCompetencia(){

        const novaCompetencia = {
            codigo: String(uuid.v4()),
            descricao: descricao,
            nivel: nivel
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

            <Campo
                onChangeText={setDescricao}
                value={descricao}
            />

            <AdicaoConteiner>

                <Picker
                    selectedValue={nivel}
                    onValueChange={(opcao) => setNivel(opcao)}
                    mode={'dropdown'}
                    style={{
                        flex: 1,
                        backgroundColor: "#034780",
                        color: '#fff',
                        fontSize: 16,
                        marginRight: 12
                        }}
                    >
                    {
                        niveis.map(opcao =>(
                            <Picker.Item key={opcao.value}
                                label={opcao.label}
                                value={opcao.value}
                            />
                        ))
                    }
                </Picker>

                <Botao
                    onPress={adicionarCompetencia}
                >
                    <Icone name="done"></Icone>
                </Botao>

            </AdicaoConteiner>

            {/* <Niveis
                radio_props={niveis}
                initial={0}
                onPress={(value) => {setNivel(value)}}
            /> */}

            <Lista 
                data={competencias}
                keyExtractor={ item => item.codigo }
                renderItem={ ({item}) => 
                    <Conhecimento
                        nome={item.descricao}
                        nivel={item.nivel}
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