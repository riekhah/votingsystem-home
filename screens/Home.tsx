import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, LayoutAnimation, UIManager, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreen = () => {
    const navigation = useNavigation();

    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const cards = [
        {
            id: "1",
            title: "Candidate List",
            details: "View all candidates and their details.",
            buttons: [
                { label: "View Candidates", action: () => alert("Compare Candidates Clicked")  },
                { label: "Compare", action: () => alert("Compare Candidates Clicked") },
                { label: "More Info", action: () => alert("More Info Clicked") },
            ],
        },
    ];

    const toggleExpand = (id: string) => {
        LayoutAnimation.easeInEaseOut();
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.mainHeader}>VoteWise</Text>

            <View style={styles.container}>
                <Text style={styles.header}>Election Guide</Text>

                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                    <TextInput style={styles.searchBar} placeholder="Search..." />
                </View>

                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => toggleExpand(item.id)} activeOpacity={0.9}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardText}>{item.title}</Text>
                                <Ionicons name={expandedCard === item.id ? "chevron-up" : "chevron-down"} size={20} color="gray" />
                            </View>

                            {expandedCard === item.id && (
                                <View style={styles.expandedContent}>
                                    <Text style={styles.details}>{item.details}</Text>
                                    {item.buttons.map((btn, index) => (
                                        <TouchableOpacity key={index} style={styles.button} onPress={btn.action}>
                                            <Text style={styles.buttonText}>{btn.label}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#007bff",
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    mainHeader: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#fff",
        backgroundColor: "#007bff",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
    },
    card: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    expandedContent: {
        marginTop: 10,
    },
    details: {
        fontSize: 14,
        color: "gray",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default HomeScreen;
