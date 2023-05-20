import { Text, TextInput, View } from "react-native";

const EntradaDados = ({ label, tipo = 'text' }: any) => {

    return <View style={{ marginBottom: 5 }}>
        <Text>{label}</Text>
        <TextInput
            secureTextEntry={tipo == 'text' ? false : true}
            style={{
                borderWidth: 1,
                borderRadius: 15
            }} />
    </View>
}

export default EntradaDados;