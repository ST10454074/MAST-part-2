import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log-In Information</Text>

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Log In" color="red" onPress={() => alert('Logged In!')} />

      <TouchableOpacity onPress={() => alert('Forgot Password')}>
        <Text style={styles.forgotPassword}>Forgot password? <Text style={styles.link}>Click here.</Text></Text>
      </TouchableOpacity>

      <Image source={require('../assets/Christoffels.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 20, width: '80%' },
  forgotPassword: { marginTop: 15 },
  link: { color: 'red', textDecorationLine: 'underline' },
  logo: { width: 100, height: 100, marginTop: 30 }
});

export default LoginScreen;
