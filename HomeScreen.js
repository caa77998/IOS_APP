// HomeScreen.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Footer from './Footer';

const HomeScreen = ({ navigation }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handlePress = (section) => {
    setSelectedSection(section);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#005bbb" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Image
            source={require('./static/Images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={require('./static/Images/home_img.jpg')}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === 'Products' && styles.sectionSelected
          ]}
          onPress={() => {
            handlePress('Products');
            navigation.navigate('Products');
          }}
        >
          <Text style={styles.sectionTitle}>主要產品</Text>
          <Text style={styles.sectionContent}>電腦數控放電機、線切割機、細孔放電機、加工中心機</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === 'AboutUs' && styles.sectionSelected
          ]}
          onPress={() => {
            handlePress('AboutUs');
            navigation.navigate('AboutUs');
          }}
        >
          <Text style={styles.sectionTitle}>關於我們</Text>
          <Text style={styles.sectionContent}>
            美溪機電工業股份有限公司專業於電腦數控放電機、線切割機、細孔放電機和加工中心機的製造與銷售。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => {
            handlePress('RestfulAPI');
            navigation.navigate('Books');
          }}
        >
          <Text style={styles.sectionTitle}>Restful API</Text>
          <Text style={styles.sectionContent}>管理書籍資料的練習</Text>
        </TouchableOpacity>

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
  header: {
    backgroundColor: '#005bbb',
    padding: 0,
    alignItems: 'center',
  },
  logo: {
    width: 287,
    height: 80,
    resizeMode: 'contain',
  },
  banner: {
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  section: {
    margin: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0', // 默認邊框顏色
  },
  sectionSelected: {
    backgroundColor: '#cccccc', // 被選中的背景顏色
    borderColor: '#000', // 被選中的邊框顏色
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#005bbb',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
});

export default HomeScreen;
