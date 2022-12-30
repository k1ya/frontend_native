import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Go to the other tabs to see the Datasets retrieved from http://127.0.0.1:8000/X/</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
