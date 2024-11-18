import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./src/pages/Auth"; 
import HomePage from "./src/pages/Home";
import AgentesPage from "./src/pages/Agentes";
import MapaPages from "./src/pages/Mapas";
import ArmasPage from "./src/pages/Armas";
import Header from "./src/components/header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground
        source={require("./assets/riot_background.jpg")}
        style={styles.backgroundImage} 
      >
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            header: (props) => {
              return <Header {...props} />;
            },
          }}
        >
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Agentes" component={AgentesPage} />
          <Stack.Screen name="Mapas" component={MapaPages} />
          <Stack.Screen name="Armas" component={ArmasPage} />
        </Stack.Navigator>
        </View>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
    flexGrow:1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexGrow:1,
    height: "100%",
    overflowY: "scroll"
  }
});
