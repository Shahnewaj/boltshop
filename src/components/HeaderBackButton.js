import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const HeaderBackButton = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.backbuttonView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  backbuttonView: {
    paddingVertical: 10,
  },
  menuIcon: {
    width: 25,
    height: 20,
    padding: 10
  },
});

export default HeaderBackButton;
