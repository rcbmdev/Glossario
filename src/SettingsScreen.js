import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const logo = require('./assets/logo.png'); 

const SettingsScreen = () => {
  const teamMembers = [
    { name: 'Charles dos Santos', image: require('./assets/equipe/Charles.png'), role: 'Coordenador' },
    { name: 'Alexssandra Regina Lopes Guajajara Silva', image: require('./assets/equipe/faceless.jpg'), role: 'Consultoria' },
    { name: 'Cleciomar Ribeiro de Sousa Guajajara', image: require('./assets/equipe/cleciomar.png'), role: 'Pesquisa' },
    { name: 'Yumi Atanazio Acelino e Silva Guajajara', image: require('./assets/equipe/faceless.jpg'), role: 'Pesquisa' },
    { name: 'Yaslee Ribeiro Lopes Guajajara', image: require('./assets/equipe/Yaslee.jpeg'), role: 'Pesquisa' },
    { name: 'Dhiogo Rezende Gomes', image: require('./assets/equipe/Dhiogo.jpeg'), role: 'Consultoria' },
    { name: 'Paulo Ericson Valentim Silva', image: require('./assets/equipe/faceless.jpg'), role: 'Desenvolvimento' },
    { name: 'Rodrigo da Costa Barros Macedo', image: require('./assets/equipe/rodrigo.png'), role: 'Desenvolvimento' },
    { name: 'Kawana Lopes Guajajara da Silva', image: require('./assets/equipe/kawana.png'), role: 'Consultoria' },
    { name: 'Hamilton de Arruda Souza', image: require('./assets/equipe/Hamilton.png'), role: 'Desenvolvimento' },
    { name: 'Domingos Bernardo Guajajara Junior', image: require('./assets/equipe/faceless.jpg'), role: 'Consultoria' },
  ];

  // Agrupando membros por função
  const groupedMembers = teamMembers.reduce((groups, member) => {
    (groups[member.role] = groups[member.role] || []).push(member);
    return groups;
  }, {});

  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {Object.keys(groupedMembers).map((role) => (
          <View key={role}>
            <Text style={styles.roleTitle}>{role}:</Text>
            {groupedMembers[role].map((member, index) => (
              <View key={index} style={styles.memberContainer}>
                <Image source={member.image} style={styles.memberImage} />
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>
                    {member.name}
                  </Text>
                  <Text style={styles.memberRole}>{member.role}</Text>
                </View>
              </View>
            ))}
            <View style={styles.spacer} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  memberInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  memberName: {
    fontSize: 16,
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#696969',
  },
  spacer: {
    height: 20, // Ajuste a altura conforme necessário
  },
});

export default SettingsScreen;
