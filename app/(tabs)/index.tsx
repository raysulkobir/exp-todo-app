import { images } from "@/constants/images";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                className="flex-1 px-5"
                contentContainerStyle={{
                    paddingBottom: tabBarHeight + 2,
                }}
                showsVerticalScrollIndicator={false}
                bounces
            >
                {/* Hero */}
                <View>
                    <Text className="text-2xl font-bold mb-4 mt-0">Donate Blood Save Life</Text>
                    <Image
                        className="w-full h-40 rounded-2xl"
                        resizeMode="cover"
                        source={images.bloodDonationBanner}
                    />
                </View>

                {/* Donate / Need */}
                <View className="flex-row gap-4 mt-6">
                    <View
                        className="bg-[#e2eef8] rounded-2xl p-6 items-center flex-1"
                        style={{
                            shadowColor: "#102B4B",
                            shadowOpacity: 0.15,
                            shadowRadius: 25,
                            shadowOffset: { width: 0, height: 6 },
                            elevation: 8,
                        }}
                    >
                        <Image
                            className="w-[80px] h-[80px] mb-4"
                            resizeMode="contain"
                            source={images.donateBloodMenuImage}
                        />
                        <Text className="text-black text-lg font-semibold">Donate Blood</Text>
                    </View>

                    <View
                        className="bg-[#e2eef8] rounded-2xl p-6 items-center flex-1"
                        style={{
                            shadowColor: "#102B4B",
                            shadowOpacity: 0.15,
                            shadowRadius: 25,
                            shadowOffset: { width: 0, height: 6 },
                            elevation: 8,
                        }}
                    >
                        <Image
                            className="w-[80px] h-[80px] mb-4"
                            resizeMode="contain"
                            source={images.needBloodMenuImage}
                        />
                        <Text className="text-black text-lg font-semibold">Need Blood</Text>
                    </View>
                </View>

                {/* Links */}
                <View className="flex-row gap-3 mt-6">
                    <View className="bg-[#e2eef8] rounded-2xl p-3 items-center justify-center flex-1">
                        <Text className="text-base text-center">Learn about blood donation</Text>
                    </View>
                    <View className="bg-[#e2eef8] rounded-2xl p-3 items-center justify-center flex-1">
                        <Text className="text-base text-center">Am I eligible to donate?</Text>
                    </View>
                </View>

                {/* Schedule cards */}
                <View className="mt-6 space-y-4">
                    <View className="bg-[#e2eef8] rounded-[80px] overflow-hidden p-3 flex-row items-center gap-4">
                        <Image
                            source={images.calculatorIcon}
                            resizeMode="contain"
                            className="w-[52px] h-[52px]"
                        />
                        <View className="flex-1">
                            <Text className="text-gray-700">Haven't you donated blood before?</Text>
                            <Text className="text-xl font-semibold text-[#102B4B]">
                                Schedule your first donation
                            </Text>
                        </View>
                    </View>

                    <Link href="/home/ScheduleDonationScreen" asChild>
                        <Pressable className="bg-[#e2eef8] flex-row rounded-[80px] overflow-hidden p-3 items-center gap-4 mt-4">
                            <Image
                                source={images.donationDateIcon}
                                resizeMode="contain"
                                className="w-[52px] h-[52px]"
                            />
                            <View className="flex-1">
                                <Text className="text-gray-700">Have you donated blood before?</Text>
                                <Text className="text-xl font-semibold text-[#102B4B]">
                                    Set your last donation date
                                </Text>
                            </View>
                        </Pressable>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
