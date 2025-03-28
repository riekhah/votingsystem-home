import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons"; // ✅ Icons for the navbar

import HomeScreen from "./screens/Home";
import Ballot from "./screens/Ballot";

// Define the param list
export type StackParamList = {
    Home: undefined;
    Ballot: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

// ✅ Create a Bottom Tab Navigator
function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Ballot") {
                        iconName = "document-text";
                    }
                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} 
            />
            <Tab.Screen name="Ballot" component={Ballot} options={{ headerShown: false }} 
 />
        </Tab.Navigator>
    );
}

// ✅ Main Navigation (Stack Navigation)
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
