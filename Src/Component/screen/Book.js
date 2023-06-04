import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React,{useState} from 'react';
import {Icons} from '../Images/Icons';
import {normalize} from '../Utities/noralize';
import {Color} from '../Utities/Color';

const Book = props => {
    const [selectTab, setSelectTab] = useState(0)
    const [selectOption, setSelectOption] = useState('Car')
  const bookData = [
    {
      name:'Car',
      icon:require('../../assets/Icons/sports-car.png'),
  },
  {
    name:'Flight',
    icon:require('../../assets/Icons/plane.png'),
},
{
    name:'Bus',
    icon:require('../../assets/Icons/bus.png'),
},

];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: normalize(10),
          marginVertical: normalize(20),
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.iconContainer}>
          <Image source={Icons.back} style={styles.backBtn} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: normalize(16),
            fontWeight: '500',
            color: Color.black,
          }}>
          Book
        </Text>
        <View
          style={{
            paddingRight: normalize(40),
          }}
        />
      </View>
         <View style={{
            flexDirection:'row',
            justifyContent:'center',
           
         }}>
         {bookData.map((item,index)=>{
       return (
            <>
            <TouchableOpacity 
            
            onPress={()=> {setSelectTab(index),setSelectOption(index)}}
            style={{
                backgroundColor:selectTab == index ? Color.pinkdark : '#fbf3f7',
                margin:normalize(10),
                width:normalize(60),
                height:normalize(60),
                alignItems:'center',
                justifyContent:'center',
                borderRadius:normalize(10)
               

            }}>
                <Image source={item.icon}
                style={{
                    width:normalize(20),
                    height:normalize(20),
                    alignSelf:'center',
                    tintColor:selectTab === index ? Color.White : Color.black
                }}
                />
              
                <Text style={{
                    fontSize:normalize(14),
                    fontWeight:'700',
                    lineHeight:normalize(25),
                    color:selectTab === index ? Color.White : Color.black
                }}>{item.name}</Text>
            
            </TouchableOpacity>
            </>
        )
      })}
         </View>

         <View>
            {selectOption === 1 ? (<>
             <View>
                <Text>
                    One
                </Text>
             </View>
            
            </>):(<>
            <Text>2</Text>
            </>)}
         </View>
    </SafeAreaView>
  );
};

export default Book;

const styles = StyleSheet.create({
  backBtn: {
    resizeMode: 'contain',
    width: normalize(10),
    height: normalize(10),
  },
  iconContainer: {
    // backgroundColor:'red',
    borderColor: Color.black,
    borderWidth: 1,
    width: normalize(22),
    height: normalize(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(30),
  },
  BookingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookingIocn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookIcns: {
    resizeMode: 'contain',
    width: normalize(20),
    height: normalize(20),
  },
});
