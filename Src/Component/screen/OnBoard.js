import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {normalize} from '../Utities/noralize';
import {Color} from '../Utities/Color';
import {fonts} from '../Utities/fonts';
import {Icons} from '../Images/Icons';
import LinearGradient from 'react-native-linear-gradient';
import MyStatusBar from '../Utities/MyStatusBar';

const OnBoard = props => {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          blurRadius={20}
          source={Icons.backImage}
          style={{
            height: '100%',
          }}>
          <View style={Styles.LogoContainer}>
            <Image source={Icons.logo} style={Styles.logoImage} />
          </View>
          <View
            style={{
              marginVertical: normalize(30),
              marginHorizontal: normalize(20),
            }}>
            <Text style={Styles.titleTxt}>Destination Bliss</Text>
            <Text style={Styles.subTxt}
                   >
              Journey of a Lifetime: Unforgettable Adventures Await
            </Text>
          </View>
          <View style={{
            flex:1,
            backgroundColor:Color.White,
            borderTopRightRadius:normalize(30),
            borderTopLeftRadius:normalize(30),
            
          }}>
              <Text style={Styles.welcomeTxt}>Welcome</Text>
              <Text style={Styles.paragraph}>Lorem ipsum
               dolor sit amet, consectetur adipiscing elit. 
               Nullam congue malesuada purus at molestie. Nullam
                velit dolor, luctus eleifend massa ac, ullamcorper 
                pulvinar erat.</Text>
                 <View style={{
                  paddingHorizontal:normalize(25),
                  marginVertical:normalize(40)
                 }}>
                 <TouchableOpacity 
                 onPress={()=> props.navigation.navigate('Register')}
                 style={Styles.Button}>
                  <Text style={Styles.buttonTXt}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=> props.navigation.navigate('Login')}
                style={[Styles.Button, {marginTop:normalize(15)}]}>
                  <Text style={Styles.buttonTXt}>Login</Text>
                </TouchableOpacity>
                 </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const Styles = StyleSheet.create({
  LogoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(50),
  },
  logoImage: {
    resizeMode: 'contain',
    width: normalize(120),
    height: normalize(120),
  },
  titleTxt: {
    color: Color.pinkdark,
    textAlign: 'center',
    fontSize: normalize(25),
    fontFamily:'Poppins-Black'
  },

  subTxt:{
    color:Color.black,
    fontSize:normalize(15),
    textAlign:'center',
    fontFamily:fonts.Poppins_Regular,
  },
  welcomeTxt:{
    color:Color.black,
    textAlign:'center',
    fontSize:normalize(25),
    fontWeight:'600',
    paddingVertical:normalize(20)
  },
  paragraph:{
    color:Color.black,
    paddingHorizontal:normalize(20),
    fontSize:normalize(14),
    textAlign:'center'
  },
  Button:{
  backgroundColor:Color.pinkdark,
  padding:normalize(12),
  borderRadius:normalize(8),
  justifyContent:'center',
  flexDirection:'row',
  },
  buttonTXt:{
    color:Color.White,
    fontSize:normalize(14),
    textTransform:'uppercase',
    letterSpacing:normalize(2),
    fontFamily:'Poppins-Black',
    fontWeight:'600'
  }
});

export default OnBoard;
