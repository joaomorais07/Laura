import React, { useState } from "react";
import { FlatList, View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

const agentes = [
    {
      id: 1,
      funcao:"controlador",
      nome: "Astra",
      imagemUrl: require("../../../assets/Agentes/Astra.webp"),
      audioFile: require("../../../assets/Sons/astra.mp3"),
      descricao: "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos. Principais forças: Muito controle de território a longa distância. Fraquezas: Fica vulnerável enquanto utiliza as magias",
    },
    {
      id: 2,
      funcao:"iniciador",
      nome: "Breach",
      imagemUrl: require("../../../assets/Agentes/breach.webp"),
      audioFile: require("../../../assets/Sons/breach.mp3"),
      descricao: "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa. Principais forças: Muitas ferramentas para iniciar um avanço. Fraquezas: Baixa mobilidade",
    },
    {
      id: 3,
      funcao:"controlador",
      nome: "Brimstone",
      imagemUrl: require("../../../assets/Agentes/brim.webp"),
      audioFile: require("../../../assets/Sons/brim.mp3"),
      descricao: " Vindo diretamente dos EUA, o arsenal orbital dele garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente. Principais forças: Controla muito o terreno com bombas de fumaça e granadas.",
    },
    {
      id: 4,
      funcao:"sentinela",
      nome: "Chamber",
      imagemUrl: require("../../../assets/Agentes/chamber.webp"),
      audioFile: require("../../../assets/Sons/chamber.mp3"),
      descricao: "Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com uma precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano. Principais forças: Força para defesa. Fraquezas: Pouca movimentação",
    },
    {
      id: 5,
      funcao:"controlador",
      nome: "Clove",
      imagemUrl: require("../../../assets/Agentes/clove.webp"),
      audioFile: require("../../../assets/Sons/clove.mp3"),
      descricao: "Ume encrenqueire da Escócia, vai desorientar os inimigos tanto no calor do combate quanto no frio da morte. Jovem e imortal, elu mantém os inimigos confusos até do além-túmulo: momentos após a morte, elu retorna à vida. Principais forças Elu consegue ser um agente mais agressivo em relação aos outros controladores e pode utilizar suas habilidades mesmo após a morte. Além disso, sua ultimate permite reviver.",
    },
    {
      id: 6,
      funcao:"sentinela",
      nome: "Cypher",
      imagemUrl: require("../../../assets/Agentes/cypher.webp"),
      audioFile: require("../../../assets/Sons/cypher.mp3"),
      descricao: "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando. Principais forças: Muita visão além de paredes com dispositivos. Fraquezas: Pouca mobilidade",
    },
    {
      id: 7,
      funcao:"sentinela",
      nome: "Deadlock",
      imagemUrl: require("../../../assets/Agentes/deadlock.webp"),
      audioFile: require("../../../assets/Sons/deadlock.mp3"),
      descricao: "A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável. Principais forças: Capacidade de controlar o fluxo da batalha. Ela pode usar suas habilidades para criar barreiras, bloquear passagens e impedir que os inimigos avancem.",
    },
    {
      id: 8,
      funcao:"iniciador",
      nome: "Fade",
      imagemUrl: require("../../../assets/Agentes/fade.webp"),
      audioFile: require("../../../assets/Sons/fade.mp3"),
      descricao: "Fade uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão. Principais forças: Encontrar e paralizar inimigos. Fraquezas: Habilidades não possuem um alcance longo",
    },
    {
      id: 9,
      funcao:"iniciador",
      nome: "Gekko",
      imagemUrl: require("../../../assets/Agentes/gekko.webp"),
      audioFile: require("../../../assets/Sons/gekko.mp3"),
      descricao: "Gekko de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo. Principais forças: Versatilidade de habilidades. Fraquezas: Vulnerabilidade. Ele é um agente que depende de suas habilidades para ser eficaz, e essas habilidades podem ser facilmente destruídas pelos inimigos.",
    },
    {
      id: 10,
      funcao:"controlador",
      nome: "Harbor",
      imagemUrl: require("../../../assets/Agentes/harbor.webp"),
      audioFile: require("../../../assets/Sons/harbor.mp3"),
      descricao: "Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados ou atacar aqueles que se opõem a ele. Principais forças: Conter a entrada dos agentes nos bombs. Fraquezas: Suas habilidades são facilmente detectáveis.",
    },
    {
      id: 11,
      funcao:"duelista",
      nome: "Iso",
      imagemUrl: require("../../../assets/Agentes/iso.webp"),
      audioFile: require("../../../assets/Sons/iso.mp3"),
      descricao: "Iso é um mercenário chinês que entra em estado de fluxo para desmantelar os oponentes. Ele reconfigura a energia do ambiente para se proteger de balas e avança totalmente focado em direção ao próximo duelo até a morte. Principais forças Atacar com mais segurança. Fraquezas: Iso não tem habilidades que o ajudem a controlar o mapa. Isso o torna vulnerável a agentes de controle de mapa, como Jett e Breach.",
    },
    {
      id: 12,
      funcao:"duelista",
      nome: "Jett",
      imagemUrl: require("../../../assets/Agentes/Jett.webp"),
      audioFile: require("../../../assets/Sons/jett.mp3"),
      descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu. Principais forças: Altíssima mobilidade. Fraquezas: Difícil para se especializar",
    },
    {
      id: 13,
      funcao:"duelista",
      nome: "Kayo",
      imagemUrl: require("../../../assets/Agentes/kayo.webp"),
      audioFile: require("../../../assets/Sons/kayo.mp3"),
      descricao: "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate. Principais forças: Muitas ferramentas para neutralizar adversários e habilidades. Fraquezas: Muito dependente do time",
    },
    {
      id: 14,
      funcao:"sentinela",
      nome: "KillJoy",
      imagemUrl: require("../../../assets/Agentes/killjoy.webp"),
      audioFile: require("../../../assets/Sons/killjoy.mp3"),
      descricao: "Killjoy uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.Principais forças: Causa dano com seus equipamentos. Fraquezas: Poucas habilidades para o confronto direto.",
    },
    {
      id: 15,
      funcao:"duelista",
      nome: "Neon",
      imagemUrl: require("../../../assets/Agentes/neon.webp"),
      audioFile: require("../../../assets/Sons/neon.mp3"),
      descricao: "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio. Principais forças: Velocidade. Fraquezas: Vulnerável sem as suas magias.",
    },
    {
      id: 16,
      funcao:"controlador",
      nome: "Omen",
      imagemUrl: require("../../../assets/Agentes/omen.webp"),
      audioFile: require("../../../assets/Sons/omen.mp3"),
      descricao: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque. Principais forças: Muitas ferramentas para cegar e enganar os adversários. Fraquezas: Magias lentas para serem lançadas",
    },
    {
      id: 17,
      funcao:"duelista",
      nome: "Phoenix",
      imagemUrl: require("../../../assets/Agentes/phoenix.webp"),
      audioFile: require("../../../assets/Sons/phoenix.mp3"),
      descricao: "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve. Principais forças deste agente do Valorant: Trabalha com dano e cura própria. Fraquezas: Baixa mobilidade",
    },
    {
      id: 18,
      funcao:"duelista",
      nome: "Raze",
      imagemUrl: require("../../../assets/Agentes/Raze.webp"),
      audioFile: require("../../../assets/Sons/raze.mp3"),
      descricao: "Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo “porradeiro”, ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM! Principais forças: Muito dano com suas habilidades Fraquezas: Difícil para se especializar",
    },
    {
      id: 19,
      funcao:"duelista",
      nome: "Reyna",
      imagemUrl: require("../../../assets/Agentes/reyna.webp"),
      audioFile: require("../../../assets/Sons/reyna.mp3"),
      descricao: "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho. Principais forças: Extremamente poderosa no combate sozinha. Fraquezas: Poucas ferramentas para ajudar o time",
    },
    {
      id: 20,
      funcao:"sentinela",
      nome: "Sage",
      imagemUrl: require("../../../assets/Agentes/sage.webp"),
      audioFile: require("../../../assets/Sons/sage.mp3"),
      descricao: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha. Principais forças: Cura, suporte à equipe e controle de terreno. Fraquezas: Pouca agilidade",
    },
    {
      id: 21,
      funcao:"iniciador",
      nome: "Skye",
      imagemUrl: require("../../../assets/Agentes/Skye.webp"),
      audioFile: require("../../../assets/Sons/skye.mp3"),
      descricao: "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada. Principais forças : Ferramentas para ajudar os aliados. Fraquezas: Dependente bastante do time",
    },
    {
      id: 22,
      funcao:"duelista",
      nome: "Sova",
      imagemUrl: require("../../../assets/Agentes/sova.webp"),
      audioFile: require("../../../assets/Sons/sova.mp3"),
      descricao: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. Principais forças: Trabalha com muita visão além das paredes. Fraquezas: Pouco controle de terreno e difícil de aperfeiçoar.",
    },
    {
      id: 23,
      funcao:"duelista",
      nome: "Viper",
      imagemUrl: require("../../../assets/Agentes/viper.webp"),
      audioFile: require("../../../assets/Sons/viper.mp3"),
      descricao: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. Principais forças: Trabalha com muita visão além das paredes. Fraquezas: Pouco controle de terreno e difícil de aperfeiçoar.",
    },
    {
      id: 24,
      funcao:"duelista",
      nome: "Vyse",
      imagemUrl: require("../../../assets/Agentes/vyse.webp"),
      audioFile: require("../../../assets/Sons/vyse.mp3"),
      descricao: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. Principais forças: Trabalha com muita visão além das paredes. Fraquezas: Pouco controle de terreno e difícil de aperfeiçoar.",
    },
    {
      id: 25,
      funcao:"duelista",
      nome: "Yoru",
      imagemUrl: require("../../../assets/Agentes/Yoru.webp"),
      audioFile: require("../../../assets/Sons/yoru.mp3"),
      descricao: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. Principais forças: Trabalha com muita visão além das paredes. Fraquezas: Pouco controle de terreno e difícil de aperfeiçoar.",
    },
  ];

function AgentesPage() {
  const [sound, setSound] = useState();
  const { width } = useWindowDimensions();

  const numColumns = width >= 1300 ? 4 : width >= 950 ? 3 : width >= 600 ? 2 : 1;

  const playAudio = async (audioFile) => {
    const { sound } = await Audio.Sound.createAsync(audioFile, { shouldPlay: true });
    setSound(sound);
  };

  const renderAgente = ({ item }) => (
    <View style={styles.card}>
      {/* Botão de player de áudio */}
      <TouchableOpacity onPress={() => playAudio(item.audioFile)} style={styles.playButtonContainer}>
        <Icon name="play" size={20} color="#fff" />
      </TouchableOpacity>
      <Image source={item.imagemUrl} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.funcao}>Função: {item.funcao}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { flex: 1, overflow: "hidden" }]}>
      <Text style={styles.pageTitle}>Agentes do Valorant</Text>
      <FlatList
        data={agentes}
        renderItem={renderAgente}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        key={numColumns}
        contentContainerStyle={styles.listContainer}
        style={{ flex: 1 }} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

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
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    justifyContent: "center",
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#000000",
    borderRadius: 8,
    margin: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    minWidth: 250,
    maxWidth: 510,
  },
  playButtonContainer: {
    alignItems: "center",
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#ff2f2f", 
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 8,
    marginBottom: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  funcao: {
    fontSize: 14,
    color: "#eceaea",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 12,
    color: "#e4e3e3",
  },
});

export default AgentesPage;