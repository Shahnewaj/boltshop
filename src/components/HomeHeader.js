import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons';

const HomeHeader = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        style={styles.menuIconView}
                        onPress={() => {
                            alert('We will add this later')
                        }}>
                        <Image
                            source={require('../assets/menu.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Checkout');
                        }}>
                        <Ionicon name="cart-outline" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
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

export default HomeHeader
