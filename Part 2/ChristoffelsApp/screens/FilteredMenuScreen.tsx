import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const menuItems = [
  { name: 'Steak Tartare', price: 65.00, course: 'Appetizer' },
  { name: 'Cowboy Ribeye', price: 214.90, course: 'Main Course' },
  { name: 'Apple Pecan Cake', price: 40.00, course: 'Dessert' },
  { name: 'Bruschetta', price: 55.00, course: 'Appetizer' },
];

const FilteredMenuScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredItems = selectedCourse
    ? menuItems.filter(item => item.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>

      <View style={styles.buttonContainer}>
        <Button title="Show All" onPress={() => setSelectedCourse(null)} />
        <Button title="Appetizers" onPress={() => setSelectedCourse('Appetizer')} />
        <Button title="Main Courses" onPress={() => setSelectedCourse('Main Course')} />
        <Button title="Desserts" onPress={() => setSelectedCourse('Dessert')} />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} - R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  listItem: { padding: 10, borderBottomWidth: 1 }
});

export default FilteredMenuScreen;
