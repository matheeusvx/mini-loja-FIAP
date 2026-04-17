import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho } = useCarrinho();

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.nome}</Text>
                <Text>R$ {item.preco.toFixed(2)}</Text>
              </View>
            )}
          />

          <Text style={styles.total}>
            💰 Total: R$ {total.toFixed(2)}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eaeaea',
    marginVertical: 5,
    borderRadius: 8,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});