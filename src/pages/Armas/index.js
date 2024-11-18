import React from "react";
import { StyleSheet, View, Text, Image, FlatList, useWindowDimensions } from "react-native";
import Header from "../../components/header";

// Array atualizado com informações das armas do Valorant
const armas = [
  {
    id: "1",
    nome: "Vandal",
    dano:
      "160 (cabeça), 40 (corpo), 20 (pernas) - em todas as distâncias",
    precisao:
      "Alta em disparos únicos, mas reduz com disparos automáticos contínuos.",
    tipo: "Rifle de assalto",
    cadencia: "9,75 disparos por segundo",
    imagem: require("../../../assets/Armas/Vandal.jpg"),
  },
  {
    id: "2",
    nome: "Phantom",
    dano:
      "156 (cabeça), 39 (corpo), 19 (pernas) - até 15m | 140 (cabeça), 35 (corpo), 17,5 (pernas) - acima de 15m",
    precisao:
      "Boa precisão automática com menor dispersão que a Vandal.",
    tipo: "Rifle de assalto",
    cadencia: "11 disparos por segundo",
    imagem: require("../../../assets/Armas/phantom.jpg"),
  },
  {
    id: "3",
    nome: "Operator",
    dano: "255 (cabeça), 150 (corpo), 120 (pernas) - em todas as distâncias",
    precisao: "Extremamente alta, ideal para alcance longo.",
    tipo: "Rifle de precisão (Sniper)",
    cadencia: "0,75 disparos por segundo",
    imagem: require("../../../assets/Armas/Operator.jpg"),
  },
  {
    id: "4",
    nome: "Sheriff",
    dano:
      "160 (cabeça), 55 (corpo), 45 (pernas) - até 30m | 145 (cabeça), 50 (corpo), 40 (pernas) - acima de 30m",
    precisao: "Alta precisão para tiros únicos.",
    tipo: "Arma secundária (pistola)",
    cadencia: "4 disparos por segundo",
    imagem: require("../../../assets/Armas/Sheriff.jpg"),
  },
  {
    id: "5",
    nome: "Spectre",
    dano:
      "78 (cabeça), 22 (corpo), 18 (pernas) - até 20m | 66 (cabeça), 19 (corpo), 16 (pernas) - acima de 20m",
    precisao: "Boa para curtas distâncias, decai em alcance longo.",
    tipo: "SMG",
    cadencia: "13,33 disparos por segundo",
    imagem: require("../../../assets/Armas/spectre.jpg"),
  },
  {
    id: "6",
    nome: "Odin",
    dano:
      "95 (cabeça), 38 (corpo), 32 (pernas) - até 15m | 77 (cabeça), 31 (corpo), 26 (pernas) - acima de 15m",
    precisao: "Alta com bipé, porém dispersa ao movimento.",
    tipo: "Metralhadora",
    cadencia: "12-15 disparos por segundo",
    imagem: require("../../../assets/Armas/Odin.jpg"),
  },
  {
    id: "7",
    nome: "Bulldog",
    dano:
      "116 (cabeça), 35 (corpo), 30 (pernas) - até 50m",
    precisao:
      "Muito boa em rajadas curtas e moderada no automático contínuo.",
    tipo: "Rifle de assalto",
    cadencia: "9,15 disparos por segundo | 3 rajadas",
    imagem: require("../../../assets/Armas/Bulldog.jpg"),
  },
  {
    id: "8",
    nome: "Guardian",
    dano: "195 (cabeça), 65 (corpo), 49 (pernas) - todas as distâncias",
    precisao:
      "Altíssima em disparos únicos, ideal para longas distâncias.",
    tipo: "Rifle semiautomático",
    cadencia: "5,25 disparos por segundo",
    imagem: require("../../../assets/Armas/Guardian.jpg"),
  },
  {
    id: "9",
    nome: "Classic",
    dano:
      "78 (cabeça), 26 (corpo), 22 (pernas) - até 30m | 66 (cabeça), 22 (corpo), 18 (pernas) - acima de 30m",
    precisao:
      "Eficaz em disparos únicos e rajadas moderadas de perto.",
    tipo: "Arma inicial (pistola)",
    cadencia: "6,75 disparos por segundo",
    imagem: require("../../../assets/Armas/Classic.jpg"),
  },
  {
    id: "10",
    nome: "Frenzy",
    dano:
      "78 (cabeça), 26 (corpo), 22 (pernas) - até 20m | 63 (cabeça), 21 (corpo), 18 (pernas) - acima de 20m",
    precisao: "Alta em curtas distâncias, decai significativamente em longas.",
    tipo: "SMG (arma secundária)",
    cadencia: "10 disparos por segundo",
    imagem: require("../../../assets/Armas/Frenzy.jpg"),
  },
  {
    id: "11",
    nome: "Ghost",
    dano:
      "105 (cabeça), 30 (corpo), 26 (pernas) - até 30m | 88 (cabeça), 25 (corpo), 21 (pernas) - acima de 30m",
    precisao: "Muito alta, silenciosa e ideal para longas distâncias.",
    tipo: "Pistola (arma secundária)",
    cadencia: "6,75 disparos por segundo",
    imagem: require("../../../assets/Armas/Ghost.jpg"),
  },
  {
    id: "12",
    nome: "Outlaw",
    dano:
      "Detalhes não disponíveis atualmente - em desenvolvimento.",
    precisao: "Alta precisão e eficaz para alcance médio.",
    tipo: "Nova arma (informações limitadas)",
    cadencia: "A definir",
    imagem: require("../../../assets/Armas/Outlaw.jpg"),
  },
  {
    id: "13",
    nome: "Ares",
    dano:
      "72 (cabeça), 30 (corpo), 25 (pernas) - até 30m | 67 (cabeça), 28 (corpo), 23 (pernas) - acima de 30m",
    precisao: "Alta com bipé; menor precisão ao caminhar ou disparar contínuo.",
    tipo: "Metralhadora",
    cadencia: "10-13 disparos por segundo",
    imagem: require("../../../assets/Armas/Ares.jpg"),
  },
  {
    id: "14",
    nome: "Bucky",
    dano:
      "44 (cabeça), 22 (corpo), 19 (pernas) por projétil - até 8m | Dano reduzido após 8m",
    precisao: "Boa para curta distância, limitada em alcance longo.",
    tipo: "Espingarda",
    cadencia: "1,1 disparos por segundo",
    imagem: require("../../../assets/Armas/Bucky.jpg"),
  },
  {
    id: "15",
    nome: "Judge",
    dano:
      "34 (cabeça), 17 (corpo), 14 (pernas) por projétil - até 10m | Dano reduzido após 10m",
    precisao: "Alta em curtas distâncias, dispersa em médias e longas.",
    tipo: "Espingarda automática",
    cadencia: "3,5 disparos por segundo",
    imagem: require("../../../assets/Armas/Judge.jpg"),
  },
  {
    id: "16",
    nome: "Shorty",
    dano:
      "36 (cabeça), 12 (corpo), 10 (pernas) por projétil - até 7m | Dano significativamente reduzido após 7m",
    precisao: "Muito boa em curtas distâncias; inútil em longas.",
    tipo: "Espingarda (arma secundária)",
    cadencia: "2 disparos por segundo",
    imagem: require("../../../assets/Armas/Shorty.jpg"),
  },
  {
    id: "17",
    nome: "Stinger",
    dano:
      "67 (cabeça), 27 (corpo), 23 (pernas) - até 20m | 62 (cabeça), 25 (corpo), 21 (pernas) - acima de 20m",
    precisao:
      "Alta em curtas distâncias, mas com grande dispersão em disparos contínuos.",
    tipo: "SMG",
    cadencia: "16 disparos por segundo",
    imagem: require("../../../assets/Armas/Stinger.jpg"),
  },
  {
    id: "18",
    nome: "Faca",
    dano:
      "50 (ataque básico), 75 (ataque no ar) | 150 (ataque pelas costas).",
    precisao:
      "Corpo a corpo, ideal para furtividade ou em situações sem munição.",
    tipo: "Arma branca",
    cadencia: "Ataques rápidos e precisos",
    imagem: require("../../../assets/Armas/Faca.jpg"),
  },
  {
    id: "19",
    nome: "Marshal",
    dano:
      "202 (cabeça), 101 (corpo), 85 (pernas) - qualquer alcance.",
    precisao:
      "Altíssima precisão, excelente para eliminações de longa distância.",
    tipo: "Rifle de precisão leve",
    cadencia: "1,5 disparos por segundo",
    imagem: require("../../../assets/Armas/Marshal.jpg"),
  }
];

function ArmasPage() {
  const { width } = useWindowDimensions();

  // Determina o número de colunas com base na largura da tela
  const numColumns = width >= 1200 ? 4 : width >= 900 ? 3 : width >= 600 ? 2 : 1;

  const renderArmaCard = ({ item }) => (
    <View style={[styles.card, { maxWidth: `${100 / numColumns}%` }]}>
      <Image source={item.imagem} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDetail}>
        <Text style={styles.label}>Dano:</Text> {item.dano}
      </Text>
      <Text style={styles.cardDetail}>
        <Text style={styles.label}>Precisão:</Text> {item.precisao}
      </Text>
      <Text style={styles.cardDetail}>
        <Text style={styles.label}>Tipo:</Text> {item.tipo}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Armas do Valorant</Text>
      <FlatList
        data={armas}
        renderItem={renderArmaCard}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns} 
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ArmasPage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 10, 
    paddingTop: 20,
    height: '100%',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  cardsContainer: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 15,
    margin: 8,
    flex: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  cardDetail: {
    fontSize: 14,
    color: "#bbb",
    marginBottom: 4,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
  },
});
