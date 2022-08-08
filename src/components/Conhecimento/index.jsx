import { View, Text } from "react-native";
import { styles } from './styles';

export function Conhecimento( props ){
    return(
        <View style={styles.container}>
            <Text style={styles.descricao}>{props.nome}</Text>
            <Text style={styles.descricao}>{props.nivel}</Text>
        </View>
    )
}