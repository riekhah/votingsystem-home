import React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView } from "react-native";

const administrationData = {
    president: {
        name: "Juan Dela Cruz",
        projects: [
            { title: "National Infrastructure Program", year: 2023 },
            { title: "Universal Healthcare Act Implementation", year: 2024 },
        ],
    },
    vicePresident: {
        name: "Maria Santos",
        projects: [
            { title: "Educational Scholarship Expansion", year: 2023 },
            { title: "Disaster Relief Fund Initiative", year: 2024 },
        ],
    },
    senators: [
        {
            name: "Sen. Pedro Reyes",
            projects: [
                { title: "Agricultural Modernization Act", year: 2022 },
                { title: "Tax Reform Bill", year: 2023 },
            ],
        },
        {
            name: "Sen. Carla Diaz",
            projects: [
                { title: "Cybersecurity Act", year: 2023 },
                { title: "Mental Health Awareness Campaign", year: 2024 },
            ],
        },
        {
            name: "Sen. Mark Velasquez",
            projects: [
                { title: "Public Transportation Improvement Act", year: 2022 },
                { title: "Renewable Energy Subsidies", year: 2023 },
            ],
        },
    ],
    partyList: [
        {
            name: "People's Alliance Party",
            projects: [
                { title: "Housing for the Homeless Program", year: 2022 },
                { title: "Workers' Rights Protection Bill", year: 2023 },
            ],
        },
        {
            name: "Future Leaders Party",
            projects: [
                { title: "Youth Leadership Training", year: 2023 },
                { title: "Tech Startups Grant Program", year: 2024 },
            ],
        },
    ],
};

export default function AdministrationProjects() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar backgroundColor="#1F509A" barStyle="light-content" />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Administration Projects</Text>
            </View>

            <View style={styles.container}>
                {/* President */}
                <View style={[styles.section, styles.president]}>
                    <Text style={styles.subHeader}>President</Text>
                    <Text style={styles.name}>{administrationData.president.name}</Text>
                    {administrationData.president.projects.map((project, index) => (
                        <Text key={index} style={styles.project}>
                            {project.year} - {project.title}
                        </Text>
                    ))}
                </View>

                {/* Vice President */}
                <View style={[styles.section, styles.vicePresident]}>
                    <Text style={styles.subHeader}>Vice President</Text>
                    <Text style={styles.name}>{administrationData.vicePresident.name}</Text>
                    {administrationData.vicePresident.projects.map((project, index) => (
                        <Text key={index} style={styles.project}>
                            {project.year} - {project.title}
                        </Text>
                    ))}
                </View>

                {/* Senators */}
                <View style={[styles.section, styles.senators]}>
                    <Text style={styles.subHeader}>Senators</Text>
                    <FlatList
                        data={administrationData.senators}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.name}>{item.name}</Text>
                                {item.projects.map((project, index) => (
                                    <Text key={index} style={styles.project}>
                                        {project.year} - {project.title}
                                    </Text>
                                ))}
                            </View>
                        )}
                    />
                </View>

                {/* Party List */}
                <View style={[styles.section, styles.partyList]}>
                    <Text style={styles.subHeader}>Party List Representatives</Text>
                    <FlatList
                        data={administrationData.partyList}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.name}>{item.name}</Text>
                                {item.projects.map((project, index) => (
                                    <Text key={index} style={styles.project}>
                                        {project.year} - {project.title}
                                    </Text>
                                ))}
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#1F509A", // Extends blue color to status bar
    },
    headerContainer: {
        backgroundColor: "#1F509A",
        paddingVertical: 30,
        alignItems: "center",



    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "bold",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    project: {
        fontSize: 14,
        marginLeft: 10,
    },
    section: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    president: {
        backgroundColor: "rgba(31, 80, 154, 0.4)", // Light Blue
    },
    vicePresident: {
        backgroundColor: "rgba(227, 142, 73, 0.4)", // Light Salmon
    },
    senators: {
        backgroundColor: "rgba(31, 80, 154, 0.4)", // Light Blue
    },
    partyList: {
        backgroundColor: "rgba(227, 142, 73, 0.4)", // Light Salmon
    },
    listItem: {
        marginBottom: 10,
    },
});
