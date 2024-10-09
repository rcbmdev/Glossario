import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

// Substitua o caminho abaixo pelo caminho correto para a sua imagem de logo
const logo = require('./assets/logo.png');

const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagem da Logo */}
      <Image
        source={logo}
        resizeMode="contain"
        style={styles.logo}
      />
      
      {/* Texto Informativo */}
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.title}>
          Sobre o Aplicativo
        </Text>
        <Text style={styles.paragraph}>
          O aplicativo Zane Ze'eg foi desenvolvido por alunos, servidores e colaboradores do IFMA – Campus Grajaú e constitui uma fonte de pesquisa para estudantes e professores que queiram conhecer a linguagem e a cultura do povo Tentehar/Guajajara. 
        </Text>
        <Text style={styles.paragraph}>
          Trata-se de um glossário com palavras e expressões Tentehar/Guajajara que ajudam a compreender a história, as tradições, as lutas e o cotidiano deste povo. Zane Ze’eg significa “nossa fala” ou ainda “nossa linguagem”, “nossa língua” e transmite a ideia de que cultura e linguagem caminham juntas, e contribuem para a construção das identidades. O app é gratuito e tem fins educacionais.
        </Text>
      </ScrollView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 150, // Ajuste conforme necessário
    height: 150, // Ajuste conforme necessário
    marginBottom: 20,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
});
