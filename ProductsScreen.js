// ProductsScreen.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const products = [
  {
    title: 'SDR56',
    imageUrl: require('./static/Images/SDR56.jpg'),
    description: '多軸CNC控制器(Optional) 可加裝 A軸(Opt.)、 B軸(Opt.)。簡易操作 採用Windows CE操作系統，搭配15吋的全彩觸控式螢幕，提供完整設定環境、校模，及NC編輯，方便操作。可儲存2000組加工深度設定。'
  },
  {
    title: 'FX600',
    imageUrl: require('./static/Images/FX-600.jpg'),
    description: '優異的加工性能 搭配12000 rpm 直結式主軸，主軸錐度 #40 (DIN,BT,CAT)及24把刀刀庫。高剛性結構設計 整體結構採用高剛性鑄鐵製成，機體設計採用有限元素分析以達到最佳化結構，確保高精度需求。'
  },
  {
    title: 'SW325',
    imageUrl: require('./static/Images/SW325.jpg'),
    description: '高剛性結構設計 採用高剛性、高穩定性的對稱型機台結構設計，採用FC35高級米漢那鑄鐵，具熱平衡特點。自動穿線系統 全自動系統。水柱穿線可穿過工件厚達200mm以上。'
  },
  {
    title: 'ZNC-C26',
    imageUrl: require('./static/Images/ZNC_C26.jpg'),
    description: 'Z軸CNC可程式控制，自動控制加工深度與監控粗加工到細加工。1 micron解析度光學尺，全閉環迴路，提供即時反饋與精準定位精度。'
  }
];

const screenWidth = Dimensions.get('window').width;

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePress = (index) => {
    setSelectedProduct(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {products.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.section,
              selectedProduct === index && styles.sectionSelected
            ]}
            onPress={() => handlePress(index)}
          >
            <Image source={product.imageUrl} style={styles.productImage} />
            <Text style={styles.sectionTitle}>{product.title}</Text>
            <Text style={styles.sectionContent}>{product.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  productImage: {
    width: screenWidth - 40, // 20 margin on each side
    height: (screenWidth - 40) * 0.75, // 4:3 aspect ratio
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
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

export default ProductsScreen;
