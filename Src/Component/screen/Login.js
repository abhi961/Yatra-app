import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../Images/Icons';
import {normalize} from '../Utities/noralize';
import {Color} from '../Utities/Color';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const toggleToOTPscreen = () => {
    props.navigation.navigate('ReceviedOtp');
  };
  return (
    <>
   <KeyboardAvoidingView style={{
    flex:1,
   }}>
   <SafeAreaView
        style={{
          flex: 1,
        }}>
           <ScrollView>
           <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: normalize(10),
          }}>
          <Image
            source={Icons.backImage}
            style={{
              resizeMode: 'cover',
              width: normalize(250),
              height: normalize(250),
              borderRadius: normalize(10),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: normalize(20),
          }}>
          <Text
            style={{
              color: Color.pinkdark,
              fontSize: normalize(18),
              fontWeight: 'bold',
            }}>
            Welcome Back!
          </Text>
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
            secureTextEntry
            keyboardType="numeric"
            value={password}
            onChangeText={text => setPassword(text)}
            style={Styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor={Color.black}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: normalize(25),
          }}>
          <Text
            style={{
              color: Color.black,
              fontSize: normalize(13),
              paddingBottom: normalize(10),
              textTransform:'uppercase',
              letterSpacing:normalize(2),
              fontWeight:'500'
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => props.navigation.navigate('Home')}>
            <Text
              style={{
                color: Color.White,
                fontSize: normalize(14),
                textTransform:'uppercase',
                letterSpacing:normalize(2)
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: normalize(6),
            alignItems: 'center',
        
          }}>
          <Text
            style={{
              color: Color.MainColor,
              fontSize: normalize(15),
            }}>
            Don't Have An Account?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text
              style={{
                color: Color.black,
                fontSize: normalize(14),
                fontWeight: '900',
                marginLeft: normalize(5),
                textTransform:'uppercase'
              }}>
              Register Here
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            margin: normalize(20),
          }}>
          <TouchableOpacity>
            <Image
              style={{
                resizeMode: 'contain',
                width: normalize(28),
                height: normalize(28),
              }}
              source={Icons.Fb}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              shadowColor: '#ff1a75',

              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: normalize(28),
                height: normalize(28),
                marginLeft: normalize(15),
              }}
              source={Icons.google}
            />
          </TouchableOpacity>
        </View>
           </ScrollView>
      </SafeAreaView>
   </KeyboardAvoidingView>
    </>
  );
}
const Styles = StyleSheet.create({
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
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputText: {
    width: normalize(220),
    paddingHorizontal: normalize(15),
    fontSize: normalize(14),
  },
  button: {
    backgroundColor: Color.pinkdark,
    padding:normalize(14),
    paddingHorizontal:normalize(126),
    // marginBottom:normalize(30),
    padding:normalize(12),
  borderRadius:normalize(8),
    shadowColor: '#ff1a75',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 12,
    borderRadius: normalize(8),
  },
});
