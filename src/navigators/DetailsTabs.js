import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details1Screen } from '../screens/Details1Screen';
import { Details2Screen } from '../screens/Details2Screen';

const Tab = createBottomTabNavigator();
export function DetailsTabs() {
  return (
    // headerShown: false evita que cada aba adicione seu próprio header
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Details1"
        component={Details1Screen}
        options={{
          title: "DETAILS SCREEN 1",
        }} />

      <Tab.Screen
        name="Details2"
        component={Details2Screen}
        options={{
          title: "DETAILS SCREEN 2",
        }} />
    </Tab.Navigator>
  );
}
