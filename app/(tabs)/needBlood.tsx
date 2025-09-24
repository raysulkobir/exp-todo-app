import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const needBlood = () => {
  return (

    <SafeAreaView className="flex-1 bg-white">
      <View className='flex-row mt-4'>
        <View className="bg-red-600 h-[50px] text-center flex-1">
          <Text>Need Blood Screen</Text>
        </View>

        <View className="bg-yellow-600 h-[50px] text-center flex-1">
          <Text>Need Blood Screen</Text>
        </View>
      </View>

      <View className='bg-green-400 flex-col pt-4 border rounded-rl-2xl border-[#e5b20b] m-4'>
        <Text className='text-center'>Need Blood Screen</Text>

        <View className='flex-row mt-4 border rounded-rl-2xl border-[#e5b20b]'>
          <View className="bg-blue-600 h-[50px] text-center flex-1">
            <Text>Need Blood Screen</Text>
          </View>

          <View className='flex-1 bg-purple-600 h-[50px] text-center'>
            <Text>Need Blood Screen</Text>
          </View>
        </View>
      </View>


    <View className='flex-row mt-4'>
        <View className='bg-pink-400 flex-col pt-4 border rounded-rl-2xl border-[#e5b20b] m-4 flex-1 justify-center'>
          <Text className='text-center'>Need Blood Screen</Text>
        </View>

        <View className='bg-pink-400 flex-col pt-4 border rounded-rl-2xl border-[#e5b20b] m-4 flex-1 justify-center'>
          <Text className='text-center'>Need Blood Screen</Text>
        </View>
    </View>

    <View className='bg-gray-300  pt-4 border rounded-rl-24xl border-[#e5b20b] m-4 flex-row'>
      <View className='bg-indigo-600 h-[50px] text-center m-4 flex-1'>
        <Text className='text-center'>Need Blood Screen</Text>
      </View>

        <View className='bg-indigo-600 h-[50px] text-center m-4 flex-1'>
          <Text className='text-center'>Need Blood Screen</Text>
        </View>
    </View>
    </SafeAreaView>




  )
}

export default needBlood