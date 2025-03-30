import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation";

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const categories = [
        { name: "PRESIDENT", image: require("../assets/phflag.jpg"), description: "Functions as both the head of state and the head of government." },
        { name: "VICE PRESIDENT", image: require("../assets/phflag.jpg"), description: "Supports the president and assumes office if the president is unable to serve." },
        { name: "SENATOR" , image: require("../assets/phflag.jpg"), description: "Represents the people and passes laws at the national level." }, 
        { name: "PARTY LIST", image: require("../assets/phflag.jpg"), description: "Advocates for marginalized groups in the legislature." },
    ];

    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#007bff" barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>VoteWise</Text>
            </View>
            <Text style={styles.descriptiontop}>Click the box to start searching for a candidate.</Text>
            {/* Category Grid */}
            <View style={styles.gridContainer}>
                {categories.map((category) => (
                    <TouchableOpacity 
                        key={category.name} 
                        style={styles.box} 
                        onPress={() => navigation.navigate("President", { category: category.name })}
                    >
                        <ImageBackground source={category.image} style={styles.imageBackground} imageStyle={{ borderRadius: 10 }}>
                            <View style={styles.overlay}>
                                <Text style={styles.label}>{category.name}</Text>

                                {/* Description Box */}
                                <View style={styles.descriptionBox}>
                                    <Text style={styles.descriptionText}>
                                    <Text style={styles.descriptionText}>{category.description}</Text>
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
  
    },
    header: {
        backgroundColor: "#1F509A",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    headerText: {
        marginTop: 40,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: -10,
    },
    descriptiontop: {
        fontSize: 15,
        marginTop: 20,
        marginHorizontal: 15,
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 10,
    },
    box: {
        width: "48%", // Adjust for 2 columns
        height: 250,
        marginBottom: 15,
        borderRadius: 10,
        overflow: "hidden",
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        backgroundColor: "rgba(31, 80, 154, 0.5)",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    label: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 130,
        textShadowColor: "black",  // Strong black shadow
        textShadowOffset: { width: 3, height: 3 },
        textAlign: "center",
        textShadowRadius: 10,  // Increased radius for better visibility
    },
    descriptionBox: {
        backgroundColor: "#E38E49",
        paddingBottom: 100,
        borderRadius: 5,
        marginTop: 70,
        width: "100%",
        paddingHorizontal: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: "white",
        marginTop: 20,
        textAlign: "center",
    },
});

export default HomeScreen;
