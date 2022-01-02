import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import CheckoutScreen from '../screen/CheckoutScreen';
import OtpScreen from '../screen/OtpScreen';
import ProductDetails from '../screen/ProductDetails';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';



const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={OtpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={ProductDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;