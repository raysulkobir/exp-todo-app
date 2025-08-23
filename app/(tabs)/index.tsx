import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform, Text, View } from 'react-native';



Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowBanner: true,
        shouldShowList: true,
    }),
});

async function registerForPushNotificationsAsync() {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }

    if (!Device.isDevice) throw new Error("Use a physical device.");

    const { status: existing } = await Notifications.getPermissionsAsync();
    let status = existing;
    if (existing !== "granted") {
        const req = await Notifications.requestPermissionsAsync();
        status = req.status;
    }
    if (status !== "granted") throw new Error("Permission not granted");

    const projectId =
        // EAS dev builds auto-set this, but we recommend reading it explicitly:
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) throw new Error("Project ID not found");

    const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    return token;
}

async function sendViaExpoPushAPI(expoPushToken: string) {
    await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Accept-encoding": "gzip, deflate",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            to: expoPushToken,
            sound: "default",
            title: "Hello 👋",
            body: "This is a test from Expo Push!",
            data: { demo: true },
        }),
    });
}


const index = () => {

     

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-600">Hello NativeWindd</Text>
        </View>
    );
}

export default index