import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Header() {
  const [username, setUsername] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Controle do menu principal
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false); // Controle do menu de perfil
  const navigation = useNavigation();
  const route = useRoute(); // Obtém o nome da rota atual
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchUsuarioAtual = async () => {
      try {
        const nomeUsuario = await AsyncStorage.getItem("UsuarioAtual");
        setUsername(nomeUsuario || "Usuário");
      } catch (error) {
        console.error("Erro ao recuperar o usuário atual:", error);
      }
    };

    fetchUsuarioAtual();
  }, []);

  const isActive = (routeName) => route.name === routeName;

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible); // Alterna o estado de visibilidade do menu
  };

  const handleProfileMenuToggle = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible); // Alterna o menu de perfil
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("UsuarioAtual"); // Remove o usuário atual do AsyncStorage
      navigation.navigate("Auth"); // Navega para a tela de login após logout
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.menuItems}>
        <Image
          source={require("../../../assets/GuideValorant.png")}
          style={styles.logoImage}
        />

        {width >= 500 ? (
          <View style={styles.menu}>
            <TouchableOpacity
              style={[styles.menuItem, isActive("Home") && styles.activeMenuItem]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.menuText}>Sobre o jogo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, isActive("Agentes") && styles.activeMenuItem]}
              onPress={() => navigation.navigate("Agentes")}
            >
              <Text style={styles.menuText}>Agentes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, isActive("Mapas") && styles.activeMenuItem]}
              onPress={() => navigation.navigate("Mapas")}
            >
              <Text style={styles.menuText}>Mapas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, isActive("Armas") && styles.activeMenuItem]}
              onPress={() => navigation.navigate("Armas")}
            >
              <Text style={styles.menuText}>Armas</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity onPress={handleMenuToggle} style={styles.menuButton}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.activePageText}>{route.name}</Text>
          </>
        )}
      </View>

      {/* Botão de login com o nome de usuário */}
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={handleProfileMenuToggle}
        >
          <Text style={styles.profileText}>{username}</Text>
        </TouchableOpacity>
        {/* Menu de perfil */}
        {isProfileMenuVisible && (
          <View style={styles.profileMenu}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Menu móvel */}
      {isMenuVisible && (
        <View style={styles.mobileMenuOverlay}>
          <TouchableOpacity
            style={styles.mobileMenuItem}
            onPress={() => {
              setIsMenuVisible(false);
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.mobileMenuText}>Sobre o jogo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileMenuItem}
            onPress={() => {
              setIsMenuVisible(false);
              navigation.navigate("Agentes");
            }}
          >
            <Text style={styles.mobileMenuText}>Agentes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileMenuItem}
            onPress={() => {
              setIsMenuVisible(false);
              navigation.navigate("Mapas");
            }}
          >
            <Text style={styles.mobileMenuText}>Mapas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mobileMenuItem}
            onPress={() => {
              setIsMenuVisible(false);
              navigation.navigate("Armas");
            }}
          >
            <Text style={styles.mobileMenuText}>Armas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 40,
    width: "100%",
  },
  menuItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 52,
    height: 31,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  menuText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#ff2f2f",
  },
  profileContainer: {
    alignItems: "center",
    position: "relative",
  },
  profileButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  profileText: {
    color: "#FFF",
    fontSize: 16,
  },
  profileMenu: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: "#ff2f2f",
    padding: 10,
    borderRadius: 5,
  },
  logoutButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  logoutText: {
    color: "#FFF",
    fontSize: 14,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    color: "#FFF",
    fontSize: 24,
  },
  activePageText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
  },
  mobileMenuOverlay: {
    position: "absolute",
    top: 85,
    left: 0,
    right: 0,
    backgroundColor: "#111",
    zIndex: 10,
    padding: 20,
  },
  mobileMenuItem: {
    marginVertical: 10,
  },
  mobileMenuText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
