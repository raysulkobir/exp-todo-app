import { Link, Stack } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

function LogoTitle() {
    return <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />;
}

export default function Home() {
    return (
        <View style={styles.container}>
            {/* Per-screen header config lives here */}
            <Stack.Screen
                options={{
                    title: 'My home',
                    headerTitle: () => <LogoTitle />,
                    // headerStyle / tint are inherited from _layout; override here if you want
                }}
            />
            <Text>Home Screen</Text>

            {/* Link expects a route that exists as a file in /app */}
            <Link href="/details?name=Bacon">Go to Details</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    image: { width: 50, height: 50 },
});
