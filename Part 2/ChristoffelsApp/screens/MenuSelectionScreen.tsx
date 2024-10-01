import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose today's menu</Text>

      {['Appetizers', 'Main Course Meals', 'Desserts'].map((category) => (
        <Button key={category} title={category}
        onPress={() => navigation.navigate('MenuDetailsScreen', { category })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, marginBottom: 40 }
});

export default MenuSelectionScreen;
