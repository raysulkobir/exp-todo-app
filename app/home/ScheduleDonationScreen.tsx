import { images } from '@/constants/images';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScheduleDonationScreen() {
  const ctxHeight = useContext(BottomTabBarHeightContext); // undefined if no tabs
  const tabBarHeight = ctxHeight ?? 0;

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

        {/* Donate / Need */}
        <View className="flex-row gap-4 my-6">
          <View
            className="bg-[#e2eef8] rounded-2xl p-3 items-center flex-1"
          >
            <Text className="text-red-700 font-semibold uppercase text-sm">Thank you for donate blood /Saving a life</Text>
          </View>
        </View>

        {/* blood donation schedule */}
        <View className="flex-row gap-3 mt-6 border-2 border-[#e2eef8] rounded-[50px] p-4">
          <View className="flex-1">
            <Text className="text-end">Your Last blood {"\n"} donation date</Text>
          </View>

          <View className="flex-1">
            <Text className="text-end font-black font-light text-2xl">
              05 January 2025
            </Text>
          </View>
        </View>

        <View className="flex-row gap-3 mt-6 border-2 border-[#e2eef8] rounded-[50px] p-4">
          <View className="flex-1">
            <Text className="text-end">Your Last blood {"\n"} donation date</Text>
          </View>

          <View className="flex-1">
            <Text className="text-end font-black font-light text-2xl">
              15 January 2025
            </Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
