import { images } from "@/constants/images";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 

const DonateBlood = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 2 }}
        showsVerticalScrollIndicator={false}
        bounces
      >
        <Text className="text-2xl font-bold mb-2 mt-0">Blood Donation</Text>

        <View className="flex-row gap-4 border border-[#ccc] rounded-2xl p-6">
          <View className="flex-1">
            <Text className="font-bold">Last Donation</Text>
            <Text className="font-bold">15 Oct 2025</Text>
          </View>
          <View className="flex-1 items-end">
            <Text className="font-bold">Blood Type: B+</Text>
            <Text className="font-bold">Total Donation: 06</Text>
          </View>
        </View>

        {/* next donation schedule */}
        <View className="mt-4 border border-[#ccc] rounded-2xl">
          <Text className="mb-2 p-4 font-bold text-center text-lg">
            Your Next Blood Donation Schedule
          </Text>

          <View className="flex-row items-center gap-3 border-t-2 border-[#ccc] p-4">
            {/* Image */}
            <Image
              source={images.timeIcon}
              className="w-[52px] h-[52px] rounded-2xl"
              resizeMode="contain"
            />
            {/* Texts */}
            <View>
              <Text className="font-bold">15 Oct 2025</Text>
              <Text className="font-bold">B+ Blood</Text>
            </View>
            <View className="flex-1 items-end">
              <Text className="flex-column font-bold mt-2 p-2 rounded-2xl border border-[#ccc] bg-[#F2F9FF]">
                Pre/Post-donation tips
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-4 border border-[#ccc] rounded-2xl pt-4">
          <Text className="font-bold text-center text-sl">
            Your Next Blood Donation Schedule
          </Text>

          <View className="flex-column mt-4 border rounded-rl-2xl border-[#e5b20b]">
            <View className="flex-row">
                <Image
                  source={images.timeIcon}
                  className="w-[52px] h-[52px]"
                  resizeMode="contain"
                />
                <Text className="text-center">Need Blood Screen</Text>
            </View>

            <View className="text-center flex-1">
              <Text className="text-center">Need Blood Screen</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonateBlood;
