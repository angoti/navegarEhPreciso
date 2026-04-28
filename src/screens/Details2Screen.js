import { View, Text, StyleSheet } from 'react-native';

export function Details2Screen({ route }) {
  const { cidade, umidade } = route.params ?? {};
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cidade ?? '—'}</Text>
      <Text style={styles.dado}>💧 {umidade ?? '—'} %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  titulo: { fontSize: 28, fontWeight: 'bold' },
  dado: { fontSize: 20, color: '#444' },
});
