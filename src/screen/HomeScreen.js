import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import CategoryItem from '../components/shop/CategoryItem';
import ProductItem from '../components/shop/ProductItem';

const HomeScreen = ({ navigation }) => {
  const Products = useSelector((state) => state.product.AllProduct);
  const Category = useSelector((state) => state.product.AllCategory);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeHeader navigation={navigation} />
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.flatView}>
              <View style={styles.titleView}>
                <Text style={styles.title}>Categories</Text>
              </View>
              <FlatList
                data={Category}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => (
                  <CategoryItem
                    image={itemData.item.image}
                    color={itemData.item.color}
                    title={itemData.item.title}
                  />
                )}
              />
            </View>
            <View style={styles.flatView}>
              <View style={styles.titleView}>
                <Text style={styles.title}>Featured</Text>
                <TouchableOpacity
                  onPress={() => {
                    alert('We will add this later')
                  }}>
                  <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Products}
                renderItem={(itemData) => (
                  <ProductItem
                    onTabDetails={() =>
                      navigation.navigate('Details', {
                        productId: itemData.item.id,
                      })
                    }
                    title={itemData.item.title}
                    price={itemData.item.price}
                    image={itemData.item.image}
                  />
                )}
              />
            </View>

            <View style={styles.flatView}>
              <View style={styles.titleView}>
                <Text style={styles.title}>Featured</Text>
                <TouchableOpacity
                  onPress={() => {
                    alert('We will add this later');
                  }}>
                  <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={Products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => (
                  <ProductItem
                    onTabDetails={() =>
                      navigation.navigate('Details', {
                        productId: itemData.item.id,
                      })
                    }
                    title={itemData.item.title}
                    price={itemData.item.price}
                    image={itemData.item.image}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 20,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: 60
  },
  titleView: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  flatView: {
    marginBottom: 20,
  },
  seeAll: {
    color: '#656565',
    paddingHorizontal: 5,
    alignItems: 'center',
    top: 5,
  },
});

export default HomeScreen;
