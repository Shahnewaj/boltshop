import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderBackButton from '../components/HeaderBackButton';
import * as cartAction from '../../store/action/cart';
import CustomButton from '../components/CustomButton';
import HeaderWithCart from '../components/HeaderWithCart';

const ProductDetails = ({ navigation, route }) => {

  const productId = route.params.productId;
  const targetProduct = useSelector((state) =>
    state.product.AllProduct.find((prod) => prod.id === productId),
  );

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(cartAction.addToCart(targetProduct));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderWithCart navigation={navigation} />
        <View style={styles.mainView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageView}>
              <Image
                source={{ uri: targetProduct.image }}
                style={styles.bannerImage}
              />
              <View style={styles.titleView}>
                <Text style={styles.title}>{targetProduct.title}</Text>
                <Text style={styles.price}>${targetProduct.price}</Text>
              </View>
              <View>
                <Text>{targetProduct.description}</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonView}>
            <CustomButton
              title="Add To Cart"
              onPress={() => handleBuy()}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 20,
  },

  bannerImage: {
    width: '100%',
    height: 200,
  },
  titleView: {
    marginVertical: 30,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Segoe UI',
    marginBottom: 15,
    color: '#2A2A2A',
  },
  price: {
    color: '#667EEA',
    fontSize: 20,
    fontFamily: 'Segoe UI',
  },
  buttonView: {
    marginVertical: 30,
  }

});

export default ProductDetails;
