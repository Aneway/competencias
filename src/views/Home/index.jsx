import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Conhecimento } from '../../components/Conhecimento';
import {styles} from './styles';

export default function Home(){
    console.warn('HELLO');

    const [description, setDescription] = useState('')
    const [skills, setSkills] = useState([])

    function adicionarCompetencia(){
        setSkills([...skills, ' ' + description])
        setDescription('')

    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Welcome to my world!</Text>

            <TextInput 
                style={styles.input}
                placeholder="Type the competence"
                placeholderTextColor="#d3d3d3"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={adicionarCompetencia}
            >
                <Text style={styles.buttonText}>Adicionar</Text>

            </TouchableOpacity>

            <Conhecimento nome="BSCS" nivel="10/10"/>
        </View>
    )
}