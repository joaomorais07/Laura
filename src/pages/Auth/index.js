import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'; // Usando react-navigation
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Recupera a senha armazenada com o nome do usuário como chave
      const storedPassword = await AsyncStorage.getItem(usuario);
      if (storedPassword === senha) {
        // Salva o usuário atual em uma chave específica
        await AsyncStorage.setItem("UsuarioAtual", usuario);

        // Navega para a tela Home
        navigation.navigate("Home");
        if (onLoginSuccess) onLoginSuccess(); // Callback adicional, se necessário
      } else {
        Alert.alert("Erro", "Usuário ou senha incorretos.");
      }
    } catch (erro) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Fazer Login</Text>
      <Text>Usuário:</Text>
      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
        autoComplete="off"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="username"
      />
      <Text>Senha:</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        autoComplete="new-password"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="newPassword"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Icon name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}


const RegisterScreen = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation(); // Hook para acessar o navigation

  const handleRegister = async () => {
    console.log("Tentando cadastrar usuário:", user);
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const existingUser = await AsyncStorage.getItem(user);
      console.log("Usuário existente:", existingUser); // Log do usuário existente
      if (existingUser) {
        console.log("Usuário já cadastrado");
        alert("Usuário já cadastrado!");
      } else {
        await AsyncStorage.setItem(user, password);
        console.log("Cadastro realizado com sucesso para:", user);
        alert("Cadastro realizado com sucesso!");
        navigation.replace("AuthScreen"); // Substitui a tela atual pela tela de login
      }
    } catch (erro) {
      console.error("Erro ao tentar cadastrar usuário:", erro);
      alert("Erro", "Ocorreu um erro ao cadastrar");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Crie Sua Conta</Text>
      <Text>Usuário:</Text>
      <TextInput
        value={user}
        onChangeText={setUser}
        style={styles.input}
        autoComplete="off"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="username"
      />
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoComplete="off"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoComplete="new-password"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="newPassword"
      />
      <Text>Confirmar Senha:</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        autoComplete="new-password"
        autoCorrect={false}
        importantForAutofill="no"
        autoCapitalize="none"
        textContentType="newPassword"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Icon name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

// Tela principal de Autenticação
function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  console.log("Tela atual:", isLogin ? "Login" : "Cadastro");

  return (
    <ImageBackground
    source={require("../../../assets/riot_background.jpg")}
    style={styles.background}>
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            style={isLogin ? styles.selectedTab : styles.tab}
          >
            <Text style={isLogin ? styles.selectedTabText : styles.tabText}>
              Acessar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            style={!isLogin ? styles.selectedTab : styles.tab}
          >
            <Text style={!isLogin ? styles.selectedTabText : styles.tabText}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
        {isLogin ? (
          <LoginScreen onLoginSuccess={() => console.log("Login realizado")} />
        ) : (
          <RegisterScreen />
        )}
      </View>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "white",
    width: "100%",
    maxWidth: "400px",
    height: 50,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  tab: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  selectedTab: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ff2f2f",
  },
  tabText: {
    color: "#333",
  },
  selectedTabText: {
    color: "#ff2f2f",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff2f2f",
    padding: 15,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default AuthScreen;
