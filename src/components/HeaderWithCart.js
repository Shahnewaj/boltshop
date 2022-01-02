import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons';

const HeaderWithCart = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        style={styles.menuIconView}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Checkout');
                    }}>
                    <Ionicon name="cart-outline" size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuIconView: {
        marginBottom: 20,
        marginTop: 10,
    },
    menuIcon: {
        width: 25,
        height: 20,
        padding: 10
    },

})

export default HeaderWithCart
