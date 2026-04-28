import { View, Text, StyleSheet } from 'react-native';

export function TelaMapa({ route }) {
  const { cidade } = route.params ?? {};
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mapa — {cidade}</Text>
      <Text style={styles.aviso}>[Aqui entraria o componente de mapa]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  aviso: { fontSize: 14, color: '#888' },
});
