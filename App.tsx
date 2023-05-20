import React from 'react';
import { View } from 'react-native';
import Botao from './components/botoes';
import EntradaDados from './components/entradaDados';
// @Todo Claims
const App = () => {
  //  @TODO -> Criar uma tela de login com contexto
  //  @TODO -> Autenticar aplicação
  //  @TODO -> Criar Rotas autenticadas e anonimas 
  const [loading, setLoading] = React.useState(false);

  return <View style={{ marginTop: 15, padding: 15 }}>
    <EntradaDados label={'Usuario'} />
    <EntradaDados label={'Senha'} tipo={'password'} />
    <Botao label={loading ? 'Carregando...' : 'Entrar'} funcao={() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500)
    }} />
  </View>
}

export default App;
