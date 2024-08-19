// AboutUsScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Footer from './Footer';

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>關於我們</Text>
          <Text style={styles.sectionContent}>
            美溪機電工業股份有限公司成立於1984年，專注於開發高品質的電腦數控放電機、線切割機、細孔放電機和加工中心機。我們的產品廣泛應用於航空航天、汽車製造、模具加工等領域。我們致力於提供最優質的產品和服務，並持續創新以滿足客戶的需求。
          </Text>
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
  section: {
    margin: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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

export default AboutUsScreen;
