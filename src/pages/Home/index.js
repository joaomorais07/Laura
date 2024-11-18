import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Sobre Valorant</Text>
        <Text style={styles.text}>
          VALORANT é um jogo tático de tiro em primeira pessoa (FPS) desenvolvido
          pela Riot Games, lançado em 2020, que conquistou o mundo dos jogos.
          Com sua jogabilidade empolgante e recursos exclusivos, ele se tornou
          rapidamente um dos jogos mais populares do mundo. Um dos aspectos mais
          importantes do Valorant são os mapas em que os jogadores competem.
          Conhecer os mapas e saber como navegar por eles é crucial para o
          sucesso no jogo. Ele combina elementos de jogos de tiro táticos como
          "Counter-Strike" com habilidades especiais parecidas com as de jogos
          estilo "Overwatch", criando um ambiente competitivo e estratégico.
        </Text>

        <Text style={styles.subtitle}>Principais Características</Text>
        <Text style={styles.text}>
          {"\u2022"} <Text style={styles.bold}>Estilo de Jogo:</Text> As partidas
          de "Valorant" são 5 contra 5, onde uma equipe é encarregada de plantar
          uma bomba (chamada "Spike"), enquanto a outra precisa defendê-la e
          desarmá-la, ou eliminar todos os adversários. Cada rodada pode ser
          vencida de várias formas, dependendo da estratégia.
        </Text>
        <Text style={styles.text}>
          {"\u2022"} <Text style={styles.bold}>Agentes e Habilidades:</Text> O
          jogo possui atualmente 27 agentes e cada um deles têm habilidades
          únicas para atrapalhar os adversários e ajudar os aliados a conquistar
          a vitória. Ano a ano, a Riot lança novos personagens para manter os
          fãs cativados no jogo. Esses agentes são divididos em funções:
          Duelista, Iniciador, Sentinela e Controlador. Saber combinar as
          habilidades dos agentes é essencial para vencer.
        </Text>
        <Text style={styles.text}>
          {"\u2022"} <Text style={styles.bold}>Estratégia e Habilidades:</Text>{" "}
          "Valorant" exige tanto precisão de tiro quanto inteligência
          estratégica. O jogo recompensa jogadores que conseguem se posicionar
          bem, coordenar habilidades com o time e fazer o uso correto de
          recursos como armas e habilidades.
        </Text>
        <Text style={styles.text}>
          {"\u2022"} <Text style={styles.bold}>Mapas:</Text> Os mapas de
          "Valorant" são projetados para criar oportunidades de estratégias e
          táticas. Cada mapa possui características específicas, como locais de
          acesso controlados e rotas alternativas.
        </Text>
        <Text style={styles.text}>
          {"\u2022"} <Text style={styles.bold}>Competitivo:</Text> Além do modo
          casual, existe um modo ranqueado, onde os jogadores podem competir
          para subir em uma classificação que vai de "Ferro" até "Radiante", a
          classificação mais alta.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 15,
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomePage;
