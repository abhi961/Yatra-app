import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from './Utities/noralize';
import {Color} from './Utities/Color';

const {width, height} = Dimensions.get('window');
const Carousel = () => {
  const data = [
    {
      image: require('../assets/images/vaction1.jpg'),
    },
    {
      image: require('../assets/images/vaction2.jpg'),
    },
    {
      image: require('../assets/images/vaction3.jpg'),
    },
    {
      image: require('../assets/images/vaction4.jpeg'),
    },
    {
      image: require('../assets/images/vaction5.jpeg'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlider = ({item, index}) => {
    return (
      <>
        <View
          style={{
            margin: normalize(10),
            width: width - 10,
            marginTop:normalize(20)
           
          }}>
          <Image source={item.image} style={styles.imageContainer} />
        </View>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderSlider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <Animated.View
              style={{
                width: currentIndex == index ? normalize(25) : normalize(8),
                height: currentIndex == index ? normalize(8) : normalize(8),
                backgroundColor:
                  currentIndex == index ? Color.pinkdark : '#c1c1c1',
                borderRadius: normalize(20),
                marginLeft: normalize(5),
              }}></Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    width: width - 20,
    height: height - 600,
    borderRadius: normalize(10),
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
