import { icons } from "@/constants/icons";
import { images } from '@/constants/images';
import { Image, ScrollView, Text, View } from 'react-native';

const index = () => {
    return (
       <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover" />

            <ScrollView>
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />


                {/* <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center"/> */}

                <View className="mt-10">
                    <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>
                </View>
            </ScrollView>
       </View>
    );
}

export default index