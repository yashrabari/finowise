import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Color } from '../global.styles';

const Card = () => {
    return (
        <View style={{
            marginHorizontal: 20,
            marginBottom: 20
        }}>
            <View style={{
                backgroundColor: Color.primary,
                flexDirection: 'row',
                paddingHorizontal: 25,
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                alignItems: 'center'
            }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 16, color: Color.white }}>XYZ Trade</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 16, marginHorizontal: 10, color: Color.white }}>25-5-2022</Text>
                    <Image source={require('../assets/right.png')} />
                </View>
            </View>
            <View style={{
                paddingHorizontal: 25,
                borderColor: '#cccccc',
                borderWidth: 1,
                borderTopWidth: 0
            }}>
                <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Type</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>Equity</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Entry:</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>₹150</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Exit</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>₹350 - ₹550</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Stop Loss:</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>₹250</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Stock Name:</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>Relience</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Action</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>Buy</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Result</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>Loss</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View><Text style={{ fontSize: 12, color: '#888888' }}>Posted by:</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#000' }}>James S. Lawson</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>

                </View>



            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Card;
