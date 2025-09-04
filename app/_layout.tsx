import { images } from "@/constants/images";
import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import './globals.css';

function LogoTitle() {
    return (
        <View className="flex-row">
        <Image className="w-11 h-11" resizeMode="contain"  source={images.logo} />
          <Text className="text-2xl font-bold ml-2 mt-2 text-white">Bloodline</Text>
        </View>
    );
}


function BellButton() {
  return (
    <View className = "flex-row" >
      <Image className="w-8 h-8" resizeMode="contain" source={images.notification} />
      <Image className="w-37 h-37" resizeMode="contain" source={images.profile} />
    </View>
  );
}


function AppHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-[#102B4B] pt-10 rounded-b-[25px] overflow-hidden">
      <View className="h-[90px] px-4 flex-row items-center justify-between">
        <LogoTitle />
        <BellButton />
      </View>
    </View>
  );
}

export default function RootLayout() {
  return (<Stack
    screenOptions={{
      header: () => <AppHeader />,
    }}
  >
    {/* If your tabs live under (tabs), hide header there */}
    <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    <Stack.Screen name="home/ScheduleDonationScreen" options={{ headerShown: true, title: 'Schedule Donation' }} />
  </Stack>)
}
