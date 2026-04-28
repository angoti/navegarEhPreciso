import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Button
        title="Sair"
        color="red"
        onPress={() => Alert.alert("Sessão encerrada")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
});
