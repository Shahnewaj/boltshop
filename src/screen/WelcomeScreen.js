import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;

const WelcomeScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Welcome to Bolt </Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../assets/welcome.png')}
              />
            </View>
            <View style={styles.buttonView}>
              <CustomButton title="Log In with phone" onPress={() => handlePress()} />
              <View style={styles.optionView}>
                <Text style={styles.optionText}>Shop with us</Text>
              </View>
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
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleView: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  imageView: {
    marginTop: '25%'
  },
  image: {
    width: windowWidth - 50,
    height: windowWidth - 100,
  },
  buttonView: {
    marginTop: '30%',
  },
  optionView: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  optionText: {
    color: '#454242',
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
});

export default WelcomeScreen;
