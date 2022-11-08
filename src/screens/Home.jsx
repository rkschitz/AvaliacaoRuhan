import { Text, View, Pressable } from "react-native";
import { RKSstyle } from "../lib/style";

export const Home = ({ navigation }) => (
  <View style={RKSstyle.centered1}>
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      style={styles.background}
    />
    <LinearGradient
      // Button Linear Gradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.button}
    >
      <Text style={styles.text}>Sign in with Facebook</Text>
    </LinearGradient>
    <Text style={RKSstyle.textinicial}>Seja bem vindo!</Text>
    <View style={RKSstyle.centerhome}>
      <Pressable
        style={RKSstyle.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={RKSstyle.text}>Sobre</Text>
      </Pressable>
      <Pressable
        style={RKSstyle.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={RKSstyle.text}>Sobre</Text>
      </Pressable>
    </View>
  </View>
);
