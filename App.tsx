// AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUsScreen';
import ProductsScreen from './ProductsScreen';
import BooksScreen from './BooksScreen';
import BookDetailsScreen from './BookDetailsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: '關於我們', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: '主要產品', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Books" component={BooksScreen} options={{ title: 'Books' }} />
        <Stack.Screen name="BookDetails" component={BookDetailsScreen} options={{ title: 'Book Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
