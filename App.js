import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', title: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', image: require('./assets/image01.png') },
  { id: '2', title: '1KG KHÔ GÀ BƠ TỎI', shop: 'Shop LTD Food', image: require('./assets/image02.png') },
  { id: '3', title: 'Xe cần cẩu đa năng', shop: 'Shop Thế giới đồ chơi', image: require('./assets/image03.png') },
  { id: '4', title: 'Đồ chơi dạng mô hình', shop: 'Shop Thế giới đồ chơi', image: require('./assets/image04.png') },
  { id: '5', title: 'Lãnh đạo giản đơn', shop: 'Shop Minh Long Book', image: require('./assets/image05.png') },
  { id: '6', title: 'Hiểu lòng con trẻ', shop: 'Shop Minh Long Book', image: require('./assets/image06.png') },
  { id: '7', title: 'Donald trump thiên tài lãnh đạo', shop: 'Shop Nguyễn Trọng Tính', image: require('./assets/image07.png') },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {/* Tách chữ "Shop" và tên cửa hàng */}
        <View style={styles.shopContainer}>
          <Text style={styles.shopLabel}>Shop </Text>
          <Text style={styles.shopName}>{item.shop}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      {/* FlatList to render the items */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    height: 50,
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 30,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 5,
  },

  descriptionContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  descriptionText: {
    color: '#000',
    fontSize: 16,
  },

  listContainer: {
    padding: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  shopLabel: {
    fontSize: 14,
    color: '#777',
  },
  shopName: {
    fontSize: 14,
    color: '#B22222', // Màu đỏ giống như hình ảnh bạn đã cung cấp
  },
  chatButton: {
    backgroundColor: '#ff3b30',
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomMenu: {
    height: 50,
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});


export default App;
