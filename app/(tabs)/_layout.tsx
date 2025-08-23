import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return (<Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Todos",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                ),
            }}
        />

    
    </Tabs>)
}
