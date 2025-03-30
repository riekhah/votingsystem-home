import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // 🔹 For the back button icon

type PresidentScreenRouteProp = RouteProp<StackParamList, "President">;

const candidates = [
    { name: "John Doe", location: "City A", party: "Independent", experience: "10 years in politics", image: require("../assets/c1.png") },
    { name: "Jane Smith", location: "City B", party: "Democratic", experience: "15 years in government", image: require("../assets/c1.png") },
    { name: "Jane Smith", location: "City B", party: "Democratic", experience: "15 years in government", image: require("../assets/c1.png") },
    { name: "Jane Smith", location: "City B", party: "Democratic", experience: "15 years in government", image: require("../assets/c1.png") },
    { name: "Jane Smith", location: "City B", party: "Democratic", experience: "15 years in government", image: require("../assets/c1.png") },

];

const PresidentScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const route = useRoute<PresidentScreenRouteProp>();

    const [searchQuery, setSearchQuery] = useState("");

    // Filter candidates based on search query
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* 🔵 Header with blue background */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{route.params?.category || "President"}</Text>
            </View>

            <View style={styles.contentContainer}>
            <View style={styles.searchContainer}>
    <TextInput
        style={styles.searchBar}
        placeholder="Search for a candidate..."
        value={searchQuery}
        onChangeText={setSearchQuery}
    />
</View>


                <FlatList
                    data={filteredCandidates}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.location}>{item.location}</Text>
                                <Text style={styles.party}>{item.party}</Text>
                                <TouchableOpacity 
                                    style={styles.button} 
                                    onPress={() => navigation.navigate("Candidate", item)}
                                >
                                    <Text style={styles.buttonText}>Candidate Info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyText}>No candidates found</Text>}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#1F509A", // 🔵 Blue header background extends to status bar
    },
    headerContainer: {
        backgroundColor: "#1F509A",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    backButton: {
        marginRight: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginLeft: 90

    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#F2EFE7", // 🔳 Rest of screen is white
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: -40,
    },
    searchContainer: {
        paddingTop: 10,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 2, // Subtle shadow effect
    },
    searchBar: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    
    card: {
        backgroundColor: "white",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 5,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    location: {
        fontSize: 16,
        color: "gray",
    },
    party: {
        fontSize: 16,
        color: "gray",
    },
    button: {
        marginTop: 10,
        padding: 5,
        backgroundColor: "#E38E49",
        borderRadius: 5,
        alignSelf: "flex-start",
        borderWidth: 1, // Add border
        borderColor: "#E38E49", // Orange border
    },
    buttonText: {
        color: "BLACK",
        textAlign: "center",
        fontSize: 16,
    },
    emptyText: {
        textAlign: "center",
        fontSize: 16,
        color: "gray",
        marginTop: 20,
    },
});

export default PresidentScreen;
