import react from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Color, FontFamily, FontSize, Padding } from '../global.styles';
import LinearGradinet from 'react-native-linear-gradient'

const Login = () => {
    return (
        <View style={styles.root}>
            <View style={styles.upperScreen}>
                <Image source={require('../assets/2.png')} />
            </View>
            <View style={styles.mainSection}>
                <View style={styles.loginSection}>
                    <Text style={styles.loginHeading}>Mobile number</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.countryController}>
                            <Image source={require('../assets/india.png')} />
                            <Text style={styles.countryText}>+91</Text>
                            <Image source={require('../assets/down.png')} style={{ tintColor: "#000" }} />
                        </View>
                        <View style={styles.textInputController}>
                            <TextInput keyboardType='number-pad' style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.btnSection}>
                        <LinearGradinet style={{borderRadius:10}}  colors={['#00c8bc', "#03988f"]}>
                            <TouchableOpacity style={styles.signUpBtn}>
                                <Text style={{fontFamily:'poppins',fontSize:18,color:'#fff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </LinearGradinet>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.primary
    },
    upperScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSection: {
        flex: 2,
        overflow: 'hidden',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: Color.white
    },
    loginSection: {
        marginHorizontal: 25,
        marginVertical: 50
    },
    loginHeading: { fontSize: FontSize.size_5xl, fontFamily: FontFamily.poppins, color: '#171717' },
    countryController: {
        paddingBottom: 10,
        marginVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },
    countryText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontFamily: FontFamily.poppins,
        color: "#171717"
    },
    textInputController: {
        marginHorizontal: 10,
    },
    input: {
        borderBottomColor: "#C4C4C4",
        borderBottomWidth: 1,
        fontFamily: FontFamily.poppins,
        fontSize: 16,
        height: 34,
        padding: 0,
        width: 250,

    },
    signUpBtn:{
        marginHorizontal:25,
        marginVertical:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    }
})