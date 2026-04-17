import { View, Button } from 'react-native';
import { useState } from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './context/CarrinhoScreen';

export default function App() {
  const [tela, setTela] = useState('produtos');

  return (
    <CarrinhoProvider>
      <View style={{ flex: 1 }}>
        
        {tela === 'produtos' ? <ProdutosScreen /> : <CarrinhoScreen />}

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <Button title="Produtos" onPress={() => setTela('produtos')} />
          <Button title="Carrinho" onPress={() => setTela('carrinho')} />
        </View>

      </View>
    </CarrinhoProvider>
  );
}