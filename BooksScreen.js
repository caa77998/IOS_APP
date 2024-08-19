import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Footer from './Footer';

const BooksScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.47:3000/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = async () => {
    try {
      const response = await fetch('http://192.168.1.47:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          year_published: parseInt(year, 10)
        })
      });
      const newBook = await response.json();
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
      setYear('');
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { bookId: item.id })}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Author"
            value={author}
            onChangeText={setAuthor}
          />
          <TextInput
            style={styles.input}
            placeholder="Year Published"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <Button title="Add Book" onPress={addBook} />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    padding: 20,
    marginBottom: 50, // 留出空間給 footer
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 24,
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default BooksScreen;
