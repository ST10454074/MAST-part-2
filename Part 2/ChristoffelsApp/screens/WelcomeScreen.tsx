import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>To</Text>
      <Image source={require('../assets/Christoffels.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <Button title="Log In" color="red" onPress={() => navigation.navigate('LoginScreen.tsx')} />
        <Button title="Sign Up" color="red" onPress={() => navigation.navigate('SignUpScreen.tsx')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 48, fontWeight: 'bold' },
  subtitle: { fontSize: 40 },
  logo: { width: 150, height: 150, marginVertical: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: 200, marginTop: 20 }
});

export default WelcomeScreen;
