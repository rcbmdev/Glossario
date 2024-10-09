import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const face = require('./assets/face.png');
const menu = require('./assets/menu.png');
const search = require('./assets/search.png');
const logo = require('./assets/logo.png'); // Adicionando a logo
import data from "./dataset/words.json"

const HomeScreen = ({ navigation }) => {
    const [words, setWords] = useState(data.words);
    const [filteredWords, setFilteredWords] = useState(data.words);

    const searchWords = (keyword) => {
        if (typeof keyword !== 'string') {
            keyword = String(keyword); // Convertendo para string se não for
        }
        const lowercasedKeyword = keyword.toLowerCase();
        const results = words.filter(word => {
            return (
                word.word_tent.toLowerCase().includes(lowercasedKeyword) ||
                word.word_port.toLowerCase().includes(lowercasedKeyword) ||
                word.category.toLowerCase().includes(lowercasedKeyword)
            );
        });
        setFilteredWords(results);
    }

    const groupByCategory = (words) => {
        return words.reduce((groups, word) => {
            const category = word.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(word);
            return groups;
        }, {});
    };

    const groupedWords = groupByCategory(filteredWords);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <Image source={menu} resizeMode="contain" style={styles.menuIconStyle} />
                    <Image source={logo} resizeMode="contain" style={styles.logoStyle} />
                </View>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>Glossário</Text>
                </View>

                <View style={styles.searchSection}>
                    <View style={styles.searchPallet}>
                        <TextInput 
                            style={styles.searchInput}
                            placeholder="Pesquise por uma Palavra"
                            onChangeText={(text) => searchWords(text)} 
                        />
                        <View style={styles.searchIconArea}>
                            <Image source={search} resizeMode="contain" style={styles.searchIconStyle} />
                        </View>
                    </View>
                </View>

                <View style={styles.listSection}>
                    <ScrollView style={styles.elementPallet}>
                        {
                            Object.keys(groupedWords).map((category) => (
                                <View key={category}>
                                    <Text style={styles.categoryTitle}>{category}</Text>
                                    {groupedWords[category].map((word) => (
                                        <TouchableOpacity 
                                            style={styles.element} 
                                            key={word.id}
                                            activeOpacity={0.8}
                                            onPress={() => navigation.navigate('Info', { id: word.id }) }
                                        >
                                            <View style={styles.infoArea}>
                                                <Text style={styles.infoTitle}>{word.word_tent}</Text>
                                                <Text style={styles.infoSub}>{word.word_port}</Text>
                                            </View>
                                            <Text style={styles.category}>{word.category}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e7e7e7'
    },
    container: {
        flex: 1,
        paddingRight: 35,
        paddingLeft: 35,
    },
    headerSection: {
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuIconStyle: {
        width: 30,
    },
    logoStyle: {
        width: 100,  // Ajuste o tamanho da logo conforme necessário
        height: 40,  // Ajuste o tamanho da logo conforme necessário
        resizeMode: "contain",
    },
    titleSection: {
        position: 'absolute',
        top: 120, // Ajuste este valor para a distância desejada
        alignSelf: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: "600"
    },
    searchSection: {
        position: 'absolute',
        alignSelf: 'center',
        top: 150,
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "center"
    },
    searchPallet: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        borderRadius: 8,
        width: "100%",
        height: 30,
        backgroundColor: "white",
    },
    searchInput: {
        width: 245,
        height: 30,
        backgroundColor: "white",
        fontSize: 16, 
        paddingVertical: 5, 
    },
    searchIconArea: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    searchIconStyle: {
        width: 24,
        height: 24,
        marginRight: -10,
    },
    listSection: {
        marginTop: 25,
        flex: 1, // Adicionado para permitir que a lista ocupe mais espaço
    },
    elementPallet: {
        marginLeft: -15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '110%',
        height: '80%', // Aumentada a altura da lista
    },
    element: {
        height: 100,
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 13
    },
    infoArea: {
        flex: 1
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoSub: {
        fontSize: 12,
        fontWeight: '600',
        color: '#696969'
    },
    category: {
        position: 'absolute',
        right: 10,
        top: 13,
        fontSize: 12,
        fontWeight: '500',
        color: '#606060',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333'
    },
});
