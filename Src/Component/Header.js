import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icons} from './Images/Icons';
import React, {useState} from 'react';
import {normalize} from './Utities/noralize';
import Modal from 'react-native-modal';
import {Color} from './Utities/Color';

const Header = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleMenu = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor:'#fff',
          padding:normalize(10),
          alignItems: 'center',
          paddingHorizontal: normalize(10),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => toggleMenu()}>
          <Image
            source={Icons.Menu}
            style={[
              styles.meunImage,
              {width: normalize(25), height: normalize(25)},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Icons.notification}
            style={[styles.meunImage, {tintColor: Color.pinkdark}]}
          />
        </TouchableOpacity>
      </View>

      <Modal
        avoidKeyboard
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={modalVisible}
        style={{
          width: '100%',
          alignSelf: 'center',
          margin: 0,
          alignItems: 'flex-start',
        }}
        animationInTiming={800}
        animationOutTiming={1000}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={[
            {
              flex: 1,
              backgroundColor: '#ddd',
              backgroundColor: '#fff',
              borderRadius: normalize(0),
              // height: 450,
              //  paddingHorizontal: normalize(10),
              paddingBottom: normalize(20),
              width: '60%',
            },
          ]}>
          <View
            style={{
              flex: 1,
            }}>
            <Text>Hello Modal</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  meunImage: {
    resizeMode: 'contain',
    width: normalize(21),
    height: normalize(21),
  },
});
