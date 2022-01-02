import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import HeaderBackButton from '../HeaderBackButton'

const EmptyCart = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <SafeAreaView
            >
                <HeaderBackButton navigation={navigation} />

                <View style={{
                    alignItems: 'center',
                    marginTop: '20%'
                }}>
                    <Image
                        style={styles.cartImage}
                        source={require('../../assets/emptyCart.png')} />
                    <Text style={styles.text}>No Product Added</Text>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    cartImage: {
        width: 120,
        height: 120,
        marginVertical: 30,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    }
})

export default EmptyCart
