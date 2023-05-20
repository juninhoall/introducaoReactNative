import { Text, TouchableOpacity } from "react-native";

const Botao = ({ label, funcao }: any) => {
    return <>
        <TouchableOpacity onPress={funcao} style={{
            borderRadius: 15,
            padding: 5,
            backgroundColor: '#007bff',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 24, color: '#fff'}}>{label}</Text>
        </TouchableOpacity>
    </>
}

export default Botao;