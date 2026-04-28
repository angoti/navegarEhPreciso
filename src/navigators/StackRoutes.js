import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { DetailsTabs } from './DetailsTabs';
import { HomeScreen } from '../screens/HomeScreen';
import { TelaMapa } from '../screens/TelaMapa';

const Stack = createNativeStackNavigator();

// Botão ☰ que abre a gaveta — usado como headerLeft na tela inicial
function BotaoGaveta({ navigation }) {
  return (
    <Pressable onPress={() => navigation.openDrawer()} style={{ marginRight: 12 }}>
      <Text style={{ fontSize: 24, color: '#fff' }}>☰</Text>
    </Pressable>
  );
}

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1a73e8' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Weather App",
          headerLeft: () => <BotaoGaveta navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="DetailsTabs"
        component={DetailsTabs}
        options={({ route }) => ({
          // Exibe o nome da cidade enviado pela HomeScreen como título
          title: route.params?.cidade ?? "Detalhes",
        })}
      />

      <Stack.Screen
        name="Mapa"
        component={TelaMapa}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
}
