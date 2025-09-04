import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";


function TabIcon({ focused, icon, title }: any) {
    if (focused) {
        return (
            <View className="items-center text-justify-center w-32">
                <Image className="w-11 h-11 mt-14" resizeMode="contain" source={icon} />
                <Text className="text-white text-base font-semibold ml-1 mt-2">
                    {title}
                </Text>
            </View>
        );
    }

    return (
        <View className="items-center text-justify-center w-32">
            <Image className="w-11 h-11 mt-14" resizeMode="contain" source={icon} />
            <Text className="text-[#ccc] text-base font-semibold ml-1 mt-2">
                {title}
            </Text>
        </View>
    );
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#102B4B",
                    borderRadius: 25,
                    height: 120,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#102B4B",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, size = 24 }) => (
                        <TabIcon focused={focused} icon={images.homeIcon} title="Home" />
                    ),
                }}
            />

            <Tabs.Screen
                name="donateBlood"
                options={{
                    title: 'Donate Blood',
                    headerShown: false,
                    tabBarIcon: ({ focused, size = 24 }) => (
                        <TabIcon focused={focused} icon={images.donateBloodIcon} title="Donate Blood" />
                    ),
                }}
            />

            <Tabs.Screen
                name="needBlood"
                options={{
                    title: 'Need Blood',
                    headerShown: false,
                    tabBarIcon: ({ focused, size = 24 }) => (
                        <TabIcon focused={focused} icon={images.needBlood} title="Need Blood" />
                    ),
                }}
            />
        </Tabs>
    );
}