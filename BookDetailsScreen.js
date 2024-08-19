import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Footer from './Footer';

const BookDetailsScreen = ({ route, navigation }) => {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await fetch(`http://192.168.1.47:3000/books/${bookId}`);
      const data = await response.json();
      setBook(data);
      setTitle(data.title);
      setAuthor(data.author);
      setYear(data.year_published.toString());
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async () => {
    try {
      await fetch(`http://192.168.1.47:3000/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          year_published: parseInt(year, 10)
        })
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async () => {
    try {
      await fetch(`http://192.168.1.47:3000/books/${bookId}`, {
        method: 'DELETE',
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.label}>Author:</Text>
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={setAuthor}
          />
          <Text style={styles.label}>Year Published:</Text>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <Button title="Update Book" onPress={updateBook} />
          <View style={styles.buttonSpacing} />
          <Button title="Delete Book" onPress={deleteBook} />
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: 10,
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonSpacing: {
    height: 10, // 設定按鈕之間的空隙高度
  },
});

export default BookDetailsScreen;
