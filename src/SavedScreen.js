import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";

// Substitua o caminho abaixo pelo caminho correto para a sua imagem de logo
const logo = require('./assets/logo.png');

const SavedScreen = () => {
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
        <Text style={styles.title}>Apresentação do povo Tentehar/Guajajara</Text>
        <Text style={styles.paragraph}>
          Conforme Peter Schröder (2021), os Tentehar – Guajajara são um dos povos indígenas mais numerosos do Brasil e habitam mais de 10 Terras Indígenas na porção oriental da Amazônia, no estado do Maranhão. A história do povo Tentehar – Guajajara é marcada pela luta em defesa dos seus direitos e das suas tradições. Em seus mais de 380 anos de contato, os Tentehar – Guajajara se destacam pela resistência e uma cultura marcante.
        </Text>
        <Text style={styles.paragraph}>
          Nesse projeto usamos a expressão Tentehar – Guajajara para fazer referência ao grupo que habita a parte oriental da Amazônia e se diferencia do grupo Tentehar – Tembé, que está localizado na parte ocidental. O termo Tentehar inclui o primeiro e o segundo grupos mencionados acima. Tentehar significa “somos os seres humanos verdadeiros” e Guajajara, por sua vez, “os donos do cocar”.
        </Text>
        <Text style={styles.paragraph}>
          A língua Tentehar – Guajajara é da família tupi-guarani, e é chamada pelos seus falantes de Ze'egete (“a fala boa”).
        </Text>
        <Text style={styles.paragraph}>
          Considerando toda a diversidade cultural e linguística dos Tentehar – Guajajara, ressaltamos que os termos e expressões que constam no aplicativo Zane Ze'eg estão relacionados aos modos de falar dos Tentehar – Guajajara que habitam terras indígenas no município de Grajaú – MA.
        </Text>
        <Text style={styles.referenceTitle}>Texto consultado:</Text>
        <Text style={styles.reference}>
          SCHRÖDER, Peter. Guajajara. Povos Indígenas no Brasil, 23 de jan. de 2021. Disponível em: https://pib.socioambiental.org/pt/Povo:Guajajara. Acesso em: 13 de ago. de 2024.
        </Text>
        <Text style={styles.linksTitle}>Acesse os links abaixo para mais informações:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://pib.socioambiental.org/pt/Povo:Guajajara')}>
          <Text style={styles.links}>
            https://pib.socioambiental.org/pt/Povo:Guajajara.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 80,
  },
  logo: {
    width: 150, // Ajuste conforme necessário
    height: 150, // Ajuste conforme necessário
    marginBottom: 20,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
  referenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  reference: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
  linksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  links: {
    fontSize: 16,
    color: '#0066cc',
    textAlign: 'justify',
  },
});
