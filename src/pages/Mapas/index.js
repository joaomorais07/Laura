import React from "react";
import { StyleSheet, View, Text, Image, FlatList, useWindowDimensions } from "react-native";
import Header from "../../components/header";

// Array atualizado com todos os mapas do Valorant
const mapas = [
  {
    id: "1",
    nome: "Haven",
    descricao: "Mapa com três spikes sites, o que cria estratégias únicas.",
    imagem: require("../../../assets/Mapas/Haven.jpg"),
  },
  {
    id: "2",
    nome: "Bind",
    descricao: "Sem área central e com teleportadores interativos.",
    imagem: require("../../../assets/Mapas/Bind.jpg"),
  },
  {
    id: "3",
    nome: "Ascent",
    descricao: "Com uma grande área central e portas destrutíveis.",
    imagem: require("../../../assets/Mapas/Ascent.jpg"),
  },
  {
    id: "4",
    nome: "Icebox",
    descricao: "Um mapa com plataformas verticais e zip lines.",
    imagem: require("../../../assets/Mapas/Icebox.jpg"),
  },
  {
    id: "5",
    nome: "Breeze",
    descricao: "Áreas abertas e longos corredores para snipers.",
    imagem: require("../../../assets/Mapas/Breeze.png"),
  },
  {
    id: "6",
    nome: "Fracture",
    descricao: "Design inovador com duas abordagens simultâneas.",
    imagem: require("../../../assets/Mapas/Fracture.jpg"),
  },
  {
    id: "7",
    nome: "Pearl",
    descricao: "Subterrâneo com foco em tiroteios próximos.",
    imagem: require("../../../assets/Mapas/Pearl.jpg"),
  },
  {
    id: "8",
    nome: "Lotus",
    descricao: "Mapas com portas rotativas e ambiente cultural.",
    imagem: require("../../../assets/Mapas/Lotus.jpg"),
  },
  {
    id: "9",
    nome: "Split",
    descricao: "Um mapa urbano com muitas áreas estreitas e um design vertical que favorece emboscadas e tiroteios rápidos.",
    imagem: require("../../../assets/Mapas/Split.jpg"),
  },
  {
    id: "10",
    nome: "Sunset",
    descricao: "Um mapa urbano com muitas áreas estreitas e um design vertical que favorece emboscadas e tiroteios rápidos.",
    imagem: require("../../../assets/Mapas/sunset.png"),
  },
  {
    id: "11",
    nome: "Abiss",
    descricao: "Um misterioso mapa submerso com corredores sinuosos e pontos de visão limitados, desafiando os jogadores a adaptar suas estratégias em combate próximo.",
    imagem: require("../../../assets/Mapas/Abiss.webp"),
  },
];

function MapaPages() {
  const { width } = useWindowDimensions();

  // Determina o número de colunas com base na largura da tela
  const numColumns = width >= 1200 ? 4 : width >= 900 ? 3 : width >= 600 ? 2 : 1;

  const renderMapaCard = ({ item }) => (
    <View style={[styles.card, { maxWidth: `${100 / numColumns}%` }]}>
      <Image source={item.imagem} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDescription}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Mapas do Valorant</Text>
      <FlatList
        data={mapas}
        renderItem={renderMapaCard}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns} // Força a re-renderização ao mudar o número de colunas
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false} // Remove a barra de scroll (opcional)
      />
    </View>
  );
}

export default MapaPages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 20, 
  },
  cardsContainer: {
    flexGrow: 1, 
    justifyContent: "center",
    paddingBottom: 20, 
  },
  card: {
    backgroundColor: "#000000",
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
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
  },
});
