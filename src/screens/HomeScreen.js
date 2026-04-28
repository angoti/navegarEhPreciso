import { useState, useEffect } from 'react';
import { View, Text, Button, Pressable, Alert, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export function HomeScreen({ navigation }) {
  const [favorito, setFavorito] = useState(false);

  // useEffect reconfigura o headerRight sempre que `favorito` muda
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => setFavorito(atual => {
            const novo = !atual;
            Alert.alert(novo ? 'Uberlândia salva!' : 'Uberlândia removida!');
            return novo;
          })}
          style={estilos.botaoHeader}
        >
          <Text style={estilos.icone}>{favorito ? '★' : '☆'}</Text>
        </Pressable>
      ),
    });
  }, [navigation, favorito]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate("DetailsTabs", {
          cidade: "Uberlândia",
          temperatura: 28,
          umidade: 65,
        })}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  botaoHeader: { marginRight: 12 },
  icone: { fontSize: 24, color: '#fff' },
});
