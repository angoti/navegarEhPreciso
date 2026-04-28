import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackRoutes } from "./StackRoutes";
import { SettingsScreen } from "../screens/SettingsScreen";
import { createStaticNavigation } from "@react-navigation/native";

const RootNavigator = createDrawerNavigator({
  initialRouteName: "MainApp",
  screens: {
    MainApp: {
      screen: StackRoutes,
      options: {
        // Stack gerencia seu próprio header — Drawer não renderiza o dele aqui
        headerShown: false,
      },
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
});

export const RootNavigation = createStaticNavigation(RootNavigator);
