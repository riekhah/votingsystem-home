import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation";
import { useState } from "react";

type CandidateScreenRouteProp = RouteProp<StackParamList, "Candidate">;

const CandidateScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const route = useRoute<CandidateScreenRouteProp>();

    // Fix: Define activeTab type explicitly
    const [activeTab, setActiveTab] = useState<"Education" | "Govt Experience" | "Legislative Work">("Education");

    // Candidate details
    const tabDetails = {
        Education: "Graduated from XYZ University with a degree in Political Science.",
        "Govt Experience": "Served as Mayor of City A for 10 years.",
        "Legislative Work": "Authored 5 major bills on economic reform and healthcare.",
    };

    return (
        <View style={styles.container}>
            {/* Blue Top Section */}
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>

                <Image source={route.params.image} style={styles.image} />
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.party}>{route.params.party}</Text>
                <Text style={styles.experience}>{route.params.experience}</Text>
            </View>

            {/* White Bottom Section */}
            <View style={styles.bottomSection}>
                {/* Tab Buttons */}
                <View style={styles.tabs}>
                    {Object.keys(tabDetails).map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
                            onPress={() => setActiveTab(tab as keyof typeof tabDetails)}
                        >
                            <Text style={[styles.tabText, activeTab === tab ? styles.activeTabText : null]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Tab Content */}
                <Text style={styles.tabContent}>{tabDetails[activeTab]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "#007bff", // Ensures the entire background is blue
    },

    topSection: {
        flex: 1,
        backgroundColor: "#007bff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        width: "100%", // Ensures it stretches fully
    },

    bottomSection: {
        marginTop: -40,
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    
    backButton: {
        position: "absolute",
        top: 55,
        left: 10,
        padding: 10,
    },
    
    backButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    
    party: {
        fontSize: 18,
        color: "white",
        fontStyle: "italic",
    },
    
    experience: {
        fontSize: 16,
        color: "white",
        marginTop: 5,
    },
    
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    
    activeTab: {
        borderBottomColor: "#007bff",
    },
    
    tabText: {
        fontSize: 14,
        color: "gray",
    },
    
    activeTabText: {
        color: "#007bff",
        fontWeight: "bold",
    },
    
    tabContent: {
        fontSize: 16,
        color: "black",
        marginTop: 10,
    },
});

export default CandidateScreen;
