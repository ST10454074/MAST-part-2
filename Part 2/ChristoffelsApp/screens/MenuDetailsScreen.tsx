import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type ParamList = {
  MenuDetails: { category: string };
};

const MenuDetailsScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'MenuDetails'>>();
  const { category } = route.params;

  const menuItems = {
    Appetizers: {
      name: 'Steak Tartare',
      price: 'R65.00',
      image: 'Starter 2.jpg'
    },
    'Main Course Meals': {
      name: 'Cowboy Ribeye',
      price: 'R214.90',
      image: 'main 2.jpg'
    },
    Desserts: {
      name: 'Apple Pecan Cake',
      price: 'R40.00',
      image: 'Dessert2.jpg'
    }
  };

  const item = menuItems[category as keyof typeof menuItems];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, marginBottom: 20 },
  image: { width: 150, height: 150, marginBottom: 20 },
  itemName: { fontSize: 24, marginBottom: 10 },
  itemPrice: { fontSize: 18 }
});

export default MenuDetailsScreen;
