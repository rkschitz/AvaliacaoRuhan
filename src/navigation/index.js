import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Sobre } from "../screens/Sobre";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Pressable, TextInput, View } from "react-native";
import { Text, } from "react-native-paper";
import { RKSstyle } from "../lib/style";

// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

const texto1 = () => {
    return (
        <Text>Ola</Text>
    )
}

const Inicial = ({ navigation }) => (
  <View style={RKSstyle.centered}>
    <Pressable onPress={() => navigation.navigate("Logado")}>
      <Text style={RKSstyle.textinicial}>Você precisa logar</Text>
    </Pressable>
    <Text style={RKSstyle.textlabel}>Email</Text>
    <TextInput
        style={RKSstyle.inputinicial}
      />
  </View>
);

export const RootNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName="Logado"
    >
      <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Logado"
        component={RKSRootNavigation}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

// Componente base
export const RKSRootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="#fff" inactiveColor="rgba(255,255,255,0.5)">
      <MBNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Contato"
        component={Sobre}
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Registro"
        component={Register}
        options={{
          tabBarLabel: "Registro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </MBNav.Navigator>
  );
};
export const RKSmsginicial = () => {
  return <Text>Seja Bem vindo ao site da nike</Text>;
};
