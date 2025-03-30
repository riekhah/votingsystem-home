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
        Education: (
            <View>
                <Text style={styles.boldText}>Law School</Text>
                <Text>University of Nueva Caceres, 1990</Text>
    
                <Text style={styles.boldText}>Tertiary</Text>
                <Text>University of the Philippines Diliman, 1986</Text>
    
                <Text style={styles.boldText}>Secondary</Text>
                <Text>San Fernando College, 1982</Text>
    
                <Text style={styles.boldText}>Primary</Text>
                <Text>San Isabel Elementary School, 1978</Text>
            </View>
        ),
    
        "Govt Experience": (
            <Text >
                Served as Mayor of City A for 10 years, implementing various infrastructure and economic programs.
            </Text>
        ),
    
        "Legislative Work": (
            <View>
                <Text style={styles.listItem}>• Principal author of the <Text style={styles.boldText}>Freedom of Information Act</Text>, promoting government transparency and accountability.</Text>
                <Text style={styles.listItem}>• Championed amendments to the <Text style={styles.boldText}>Local Government Code</Text>, increasing internal revenue allocations for LGUs.</Text>
                <Text style={styles.listItem}>• Sponsored the <Text style={styles.boldText}>Public Health Accessibility Act</Text>, ensuring free healthcare for marginalized communities.</Text>
                <Text style={styles.listItem}>• Advocated for the <Text style={styles.boldText}>Workers' Protection Act</Text>, strengthening labor rights and fair wages.</Text>
                <Text style={styles.listItem}>• Co-authored the <Text style={styles.boldText}>National Disaster Preparedness Act</Text>, improving response systems for calamities.</Text>
            </View>
        ),
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
                <Text style={styles.experience}>Age: {route.params.age}</Text>

                <Text style={styles.experience}> Place of Birth: {route.params.location}</Text>
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
        backgroundColor: "#1F509A",
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
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
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
        borderBottomColor: "#1F509A",
    },
    
    tabText: {
        fontSize: 14,
        color: "gray",
    },
    
    activeTabText: {
        color: "#1F509A",
        fontWeight: "bold",
    },
    
    tabContent: {
        fontSize: 16,
        color: "black",
        marginTop: 0,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10,
        lineHeight: 30, // Adjust line spacing for bold text
    },
    normalText: {
        fontSize: 14,
        lineHeight: 30, // Adjust line spacing for normal text
    },
    listItem: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 22, // Adjust spacing for list items
    }
});

export default CandidateScreen;
