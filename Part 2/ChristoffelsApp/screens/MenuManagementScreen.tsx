import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MenuManagementScreen = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Steak Tartare', price: 65.00, course: 'Appetizer' },
    { name: 'Cowboy Ribeye', price: 214.90, course: 'Main Course' },
    { name: 'Apple Pecan Cake', price: 40.00, course: 'Dessert' },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const addItem = () => {
    setMenuItems([...menuItems, { name, price: parseFloat(price), course }]);
    setName('');
    setPrice('');
    setCourse('');
  };

  const removeItem = (itemName: string) => {
    setMenuItems(menuItems.filter(item => item.name !== itemName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu Items</Text>

      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Course (Appetizer, Main Course, Dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />

      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} - R{item.price} ({item.course})</Text>
            <Button title="Remove" color="red" onPress={() => removeItem(item.name)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, width: '100%' },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }
});

export default MenuManagementScreen;
