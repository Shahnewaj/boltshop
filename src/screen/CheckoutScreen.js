import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';

import CustomButton from '../components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/shop/CartItem';
import * as cartAction from '../../store/action/cart';

import {
  removeProduct,
  reduceProduct,
  increaseProduct,
} from '../../store/action/cart';
import EmptyCart from '../components/shop/EmptyCart';

const CheckoutScreen = ({ navigation }) => {

  const [time, setTime] = useState(20)

  const timer = () => {
    setTime((prevTime) => prevTime - 1);
    if (time == 0) {
      navigation.navigate('Home')
    }
  }

  useEffect(() => {
    const interval = setInterval(timer, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [time])


  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const allCartItem = useSelector((state) => {
    const newCartItems = [];
    for (const key in state.cart.cart) {
      newCartItems.push({
        productId: key,
        productTitle: state.cart.cart[key].productTitle,
        productPrice: state.cart.cart[key].productPrice,
        productImage: state.cart.cart[key].productImage,
        quantity: state.cart.cart[key].quantity,
        sum: state.cart.cart[key].sum,
      });
    }
    return newCartItems;
  });

  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigation.navigate('Home');
    dispatch(cartAction.clearCart());
    Alert.alert('Thank you for your purchase!')
  }

  let total = 0;

  if (cartTotal === 0) {
    total = 0;
  } else {
    total = cartTotal - cartTotal * 0.05 + 10;
  }

  if (total == 0) {
    return (
      <EmptyCart navigation={navigation} />
    )
  }

  return (
    <View style={styles.conatiner}>
      <HeaderBackButton navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Checkout</Text>
          </View>
          <View>
            {allCartItem?.map((item, index) => (
              <CartItem
                key={index}
                title={item.productTitle}
                price={item.sum}
                image={item.productImage}
                vendor="Dummy Vendor"
                quantity={item.quantity}
                handleRemove={() => {
                  dispatch(removeProduct(item.productId));
                }}
                handleReduce={() => {
                  dispatch(reduceProduct(item.productId));
                }}
                handleIncrease={() => {
                  dispatch(increaseProduct(item.productId));
                }}
              />
            ))}
          </View>
          <View style={styles.addressView}>
            <Text style={styles.addressText}>Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9</Text>
          </View>
          <View style={styles.sumView}>
            <View style={styles.sumItem}>
              <Text style={styles.sumTitle}>SubTotal</Text>
              <Text style={styles.sumValue}>${cartTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.sumItem}>
              <Text style={styles.sumTitle}>Discount</Text>
              <Text style={styles.sumValue}>5%</Text>
            </View>
            <View style={styles.sumItem}>
              <Text style={styles.sumTitle}>Shipping</Text>
              <Text style={styles.sumValue}>$10</Text>
            </View>
            <View style={styles.sumTotal}>
              <Text style={styles.sumTitle}>Total</Text>
              <Text style={styles.sumValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={styles.buttonView}>
        <Text style={styles.navigationHint}>{time > 0 ? `Navigating to home after ${time} sec` : 'Navigating'}</Text>
        <CustomButton
          title="Checkout"
          onPress={() => handleCheckout()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  mainView: {
    flexDirection: 'column',
  },
  titleView: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },

  addressView: {
    borderColor: '#979797',
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginVertical: 30,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  addressText: {
    color: '#434343',
    fontSize: 18,
    fontFamily: 'Segoe UI',
  },
  sumItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#979797',
    marginVertical: 10,
    paddingVertical: 10,
  },
  sumTitle: {
    color: '#919191',
    fontSize: 18,
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  sumValue: {
    color: '#434343',
    fontSize: 18,
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  buttonView: {
    marginBottom: 30,
  },
  navigationHint: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10
  }
});

CheckoutScreen.navigationOptions = (navData) => {
  return {
    header: () => null,
  };
};

export default CheckoutScreen;
