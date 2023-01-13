import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Color } from '../global.styles';
import LinearGradient from 'react-native-linear-gradient'

import Card from '../components/Card';

var arr = [
    { id: 1, key: 1 },
    { id: 2, key: 2 },
    { id: 3, key: 3 },
]



const GradientBtn = ({ name, active }) => (
    <LinearGradient colors={active ? ['#00c8bc', "#03988f"] : ['#fff', '#fff']} style={{ ...styles.gradient, ...styles.toggleButton }}>
        <Text style={{ ...styles.btn, color: active ? '#fff' : '#000' }}>{name}</Text>
    </LinearGradient>
)


const HomeScreen = () => {
    const [active, setActive] = useState(true)
    return (
        <>
            <View style={styles.header}>
                <View style={{
                    flex: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: Color.white,
                        fontWeight: 'bold'
                    }}>Trade Recommendations</Text>
                </View>
                <View style={{
                }}>
                    <Image source={require('../assets/Vector.png')} />
                </View>
            </View>
            <View style={{
                marginVertical: 20,
                marginHorizontal: 20,
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => setActive(!active)} style={{ flex: 1 }}>
                    <GradientBtn name="Ongoing Trades" active={active} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive(!active)} style={{ flex: 1 }}>
                    <GradientBtn name="Expired Trades" active={!active} />
                </TouchableOpacity>

            </View>
            <View style={{
                marginHorizontal: 20,
                justifyContent: 'center',
            }}>
                <TextInput
                    placeholder='Search by stock or mentor name'
                    style={{
                        backgroundColor: '#F6F6F6',
                        padding: 12,
                        borderRadius: 10,
                        borderColor: '#000',
                        borderWidth: 1,
                        fontSize: 16
                    }} />
                <Image style={{ position: 'absolute', right: 20 }} source={require('../assets/search.png')} />
            </View>
            <View style={{ marginVertical: 25 }}>
                <FlatList
                    data={arr}

                    keyExtractor={arr => arr.id}
                    renderItem={() => <Card />}
                />
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    header: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        height: 50,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: Color.primary,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleButton: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;
