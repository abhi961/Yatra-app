import {View, Text, StyleSheet, Image, 
  SafeAreaView,
  TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../Images/Icons';
import {normalize} from '../Utities/noralize';
import {Color} from '../Utities/Color';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Toast from '../Header'



export default function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  return (
    <>
      <SafeAreaView style={{
        flex:1,
        backgroundColor:Color.White
      }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={Styles.Backbtn}>
          <Image source={Icons.back} style={Styles.backBtnImage} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: normalize(25),
          }}>
          <Text style={Styles.headerTxt}>Let's Get Started!</Text>
        </View>
        <Text style={Styles.RegisterText}>Register Now</Text>
        <View style={Styles.TextinputBox}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={Styles.inputText}
            placeholder="Enter Name"
            placeholderTextColor={Color.black}
          />
        </View>
        <View style={Styles.TextinputBox}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={Styles.inputText}
            placeholder="Enter Email"
            placeholderTextColor={Color.black}
          />
        </View>
        <View style={Styles.TextinputBox}>
          <TextInput
            keyboardType="numeric"
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={Styles.inputText}
            placeholder="Enter Mobile No."
            placeholderTextColor={Color.black}
          />
        </View>
        <View style={Styles.TextinputBox}>
          <TextInput
           secureTextEntry
            keyboardType="numeric"
            value={password}
            onChangeText={text => setPassword(text)}
            style={Styles.inputText}
            placeholder="Enter Password."
            placeholderTextColor={Color.black}
          />
        </View>
        <View style={Styles.TextinputBox}>
          <TextInput
           secureTextEntry
            keyboardType="numeric"
            value={conPassword}
            onChangeText={text => setConPassword(text)}
            style={Styles.inputText}
            placeholder="Enter Confirm Password."
            placeholderTextColor={Color.black}
          />
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'center'
        }}>
        <TouchableOpacity style={Styles.button}
          onPress={()=> props.navigation.navigate('Login')}
          >
            <Text style={{
              color:Color.White,
              fontSize:normalize(14),
              textTransform:'uppercase',
              letterSpacing:normalize(2)
            }}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'center',
          marginTop:normalize(10),
          alignItems:'center'
        }}>
          <Text style={{
            color:Color.MainColor,
            fontSize:normalize(15)
          }}>Already Have An Account?</Text>
          <TouchableOpacity
          onPress={()=> props.navigation.navigate('Login')}
          ><Text style={{
            color:Color.black,
            fontSize:normalize(14),
            fontWeight:'900',
            marginLeft:normalize(5),
            textTransform:'uppercase'
          }}>Login Here</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
const Styles = StyleSheet.create({
  backBtnImage: {
    resizeMode: 'contain',
    width: normalize(14),
    height: normalize(14),
    tintColor: Color.pinkdark,
  },
  Backbtn: {
    backgroundColor: Color.White,
    width: normalize(25),
    height: normalize(25),
    borderRadius: normalize(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(10),
    // shadowColor: "#ff1a75",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.30,
    // shadowRadius: 11,

    // elevation: 8,
    marginTop: normalize(10),
  },
  headerTxt: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    textTransform:'uppercase',
    color: Color.pinkdark,
    paddingBottom: normalize(10),
  },
  TextinputBox: {
    backgroundColor: Color.White,
    marginHorizontal: normalize(20),
    marginVertical: normalize(12),
    borderRadius: normalize(5),
    shadowColor: '#ff1a75',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8.41,

    elevation: 5,
  },
  inputText: {
    width: normalize(220),
    paddingHorizontal: normalize(15),
    fontSize:normalize(14)
  },
  RegisterText: {
    color: Color.black,
    textAlign: 'center',
    fontSize: normalize(14),
    fontWeight: '900',
    paddingBottom: normalize(10),
    textTransform:'uppercase'
  },
  ButtonContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: normalize(100),
    paddingHorizontal: normalize(10),
  
  },
  button: {
    backgroundColor:Color.pinkdark,
    padding:normalize(14),
    paddingHorizontal:normalize(120),
    marginTop:normalize(20),     
    shadowColor: "#ff1a75",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 12,
    borderRadius:normalize(8)
  },
});
