import { View, Text, Button, StyleSheet } from 'react-native';

export function Details1Screen({ navigation, route }) {
  const { cidade, temperatura } = route.params ?? {};
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cidade ?? '—'}</Text>
      <Text style={styles.dado}>🌡 {temperatura ?? '—'} °C</Text>
      <Button
        title="Ver no Mapa"
        // getParent() sobe para o Stack Navigator — "Mapa" não existe no Tab
        onPress={() => navigation.getParent().navigate("Mapa", { cidade })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  titulo: { fontSize: 28, fontWeight: 'bold' },
  dado: { fontSize: 20, color: '#444' },
});
