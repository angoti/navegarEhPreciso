import { View, Text, Button, StyleSheet } from 'react-native';

export function TelaLogin({ aoFazerLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Weather App</Text>
      <Text style={styles.subtitulo}>Faça login para continuar</Text>
      <Button title="Entrar" onPress={aoFazerLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  titulo: { fontSize: 32, fontWeight: 'bold' },
  subtitulo: { fontSize: 16, color: '#555' },
});
