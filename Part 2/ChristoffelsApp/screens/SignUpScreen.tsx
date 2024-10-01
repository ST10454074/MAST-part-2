import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {['name', 'surname', 'email', 'contact', 'password', 'confirmPassword'].map((field, index) => (
        <TextInput
          key={index}
          placeholder={field}
          secureTextEntry={field.includes('password')}
          style={styles.input}
          value={formData[field as keyof typeof formData]}
          onChangeText={(text) => handleInputChange(field, text)}
        />
      ))}

      <Button title="Sign Up" color="red" onPress={() => alert('Signed Up!')} />

      <Image source={require('../assets/Christoffels.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 20, width: '80%' },
  logo: { width: 100, height: 100, marginTop: 30 }
});

export default SignUpScreen;
