import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../Utities/Color';
import Header from '../Header';
import Carousel from '../Carousel';
import {normalize} from '../Utities/noralize';
import {Icons} from '../Images/Icons';

const Home = (props) => {
  const [selectCat, setSelectCat] = useState(0);
  const [selectTab, setSelectTab] = useState('');

  const Categories = [
    {
      cateogry: 'Popular',
      image: require('../../assets/Icons/fire.png'),
    },
    {
      cateogry: 'Mountain',
      image: require('../../assets/Icons/mountain.png'),
    },
    {
      cateogry: 'Lake',
      image: require('../../assets/Icons/lake.png'),
    },
    {
      cateogry: 'Beach',
      image: require('../../assets/Icons/umbrella.png'),
    },
    {
      cateogry: 'Divine Place',
      image: require('../../assets/Icons/temple.png'),
    },
    {
      cateogry: 'Tracking',
      image: require('../../assets/Icons/walking.png'),
    },
  ];

  const categoryList = [
    {
      id: 1,
      place: 'Goa',
      pic: require('../../assets/images/beach1.jpg'),
      rating: 4.5,
      name: 'Anjuna Beach',
    },
    {
      id: 2,
      name: 'Kedarnath Temple',
      pic: require('../../assets/images/char-dham.jpg'),
      rating: 4.5,
      place: 'UttaraKhand',
    },
    {
      id: 3,
      name: 'Hawa Mahal',
      place: 'Jaipur',
      pic: require('../../assets/images/popular-place2.jpg'),
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Dal Lake',
      place: 'Kashmir',
      pic: require('../../assets/images/kasmir.jpg'),
      rating: 4.1,
    },
    {
      id: 5,
      name: 'India Gate',
      place: 'New Delhi',
      pic: require('../../assets/images/popular-palce3.jpg'),
      rating: 4.1,
    },
  ];

  const mostVist = [
    {
      id: 1,
      place: 'Gujrat',
      pic: require('../../assets/images/somnath.jpg'),
      rating: 4.5,
      name: 'Anjuna Beach',
    },
    {
      id: 2,
      name: 'Kedarnath Temple',
      pic: require('../../assets/images/char-dham.jpg'),
      rating: 4.5,
      place: 'UttaraKhand',
    },
    {
      id: 3,
      name: 'Palolem Beach',
      place: 'Goa',
      pic: require('../../assets/images/beach3.jpg'),
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Dal Lake',
      place: 'Kashmir',
      pic: require('../../assets/images/kasmir.jpg'),
      rating: 4.1,
    },
    {
      id: 5,
      name: 'India Gate',
      place: 'New Delhi',
      pic: require('../../assets/images/popular-palce3.jpg'),
      rating: 4.1,
    },
  ];

  const temple = [
    {
      id: 1,
      place: 'Chamoli, Uttarakhand',
      pic: require('../../assets/images/aksharDham.jpg'),
      rating: 4.5,
      name: 'Badrinath Temple',
    },
    {
      id: 2,
      name: 'Kedarnath Temple',
      pic: require('../../assets/images/char-dham.jpg'),
      rating: 4.5,
      place: 'UttaraKhand',
    },
    {
      id: 3,
      name: 'Badrinath-Temple',
      place: 'UttaraKhand',
      pic: require('../../assets/images/Badrinath-Temple.jpg'),
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Bodhi Temple',
      place: 'Bodh Gaya Bihar',
      pic: require('../../assets/images/bodhi-temple.jpg'),
      rating: 4.1,
    },
    {
      id: 5,
      name: 'Golden Temple',
      place: 'Amritsir',
      pic: require('../../assets/images/golden-temple.jpg'),
      rating: 4.1,
    },
  ];

  const profile = [
    {
      image:require('../../assets/images/Sweet-girl.jpg')
    },
    {
      image:require('../../assets/images/profile1.jpeg'),

    },
    {
      image:require('../../assets/images/saree-girl.jpg')
    },
  ]

  const rendervistPlace = ({item, index}) => {
    return (
      <TouchableOpacity style={Styles.categoryConatiner}>
        <Image source={item.pic} style={Styles.categoryImage} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={Styles.categoryPlace}>{item.place}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.pinkdark,
              }}>
              {item.rating}
            </Text>
            <Image
              source={Icons.Star}
              style={{
                resizeMode: 'contain',
                width: normalize(11),
                height: normalize(11),
                tintColor: Color.pinkdark,
                marginLeft: normalize(5),
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={Icons.Loaction}
            style={{
              resizeMode: 'contain',
              width: normalize(20),
              height: normalize(20),
              tintColor: Color.pinkdark,
            }}
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: normalize(5),
              fontSize: normalize(13),
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectCat(index)}
        style={{
          backgroundColor: selectCat == index ? Color.pinkdark : '#fbf3f7',
          padding: normalize(11),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: normalize(10),
          borderRadius: normalize(10),
          paddingHorizontal: normalize(20),
          marginTop: normalize(20),
          marginBottom: normalize(10),
          // width:'100%',
          // height:'10%'
        }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'contain',
            width: normalize(20),
            height: normalize(20),
            tintColor: selectCat == index ? Color.White : Color.black,
          }}
        />
        <Text
          style={{
            color: selectCat == index ? Color.White : 'gray',
            fontSize: normalize(14),
            marginLeft: normalize(5),
            fontWeight: '600',
          }}>
          {item.cateogry}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCategoryList = ({item, index}) => {
    return (
      <TouchableOpacity 
      onPress={()=> props.navigation.navigate('PlaceDetails',{
        data:item,
      })}
      style={Styles.categoryConatiner}>
        <Image source={item.pic} style={Styles.categoryImage} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={Styles.categoryPlace}>{item.place}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.pinkdark,
              }}>
              {item.rating}
            </Text>
            <Image
              source={Icons.Star}
              style={{
                resizeMode: 'contain',
                width: normalize(11),
                height: normalize(11),
                tintColor: Color.pinkdark,
                marginLeft: normalize(5),
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={Icons.Loaction}
            style={{
              resizeMode: 'contain',
              width: normalize(20),
              height: normalize(20),
              tintColor: Color.pinkdark,
            }}
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: normalize(5),
              fontSize: normalize(13),
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTemple = ({item, index}) => {
    return (
      <TouchableOpacity style={Styles.categoryConatiner}>
        <Image source={item.pic} style={Styles.categoryImage} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={Styles.categoryPlace}>{item.place}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.pinkdark,
              }}>
              {item.rating}
            </Text>
            <Image
              source={Icons.Star}
              style={{
                resizeMode: 'contain',
                width: normalize(11),
                height: normalize(11),
                tintColor: Color.pinkdark,
                marginLeft: normalize(5),
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={Icons.Loaction}
            style={{
              resizeMode: 'contain',
              width: normalize(20),
              height: normalize(20),
              tintColor: Color.pinkdark,
            }}
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: normalize(5),
              fontSize: normalize(13),
              fontWeight: '500',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Header name="Home" />
        <View style={Styles.textInputConatiner}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'gray'}
            style={Styles.inputTxt}
          />
          <Image
            source={Icons.Search}
            style={{
              width: normalize(16),
              height: normalize(16),
              resizeMode: 'contain',
            }}
          />
        </View>
        <Carousel />
        <FlatList
          data={Categories}
          renderItem={renderCategory}
          keyExtractor={key => key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={{
            paddingHorizontal: normalize(12),
          }}>
          <Text style={Styles.exploreText}>Explore</Text>
        </View>
        <FlatList
          data={categoryList}
          renderItem={renderCategoryList}
          keyExtractor={key => key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View
          style={{
            paddingHorizontal: normalize(12),
          }}>
          <Text style={[Styles.exploreText, {marginTop: normalize(8)}]}>
            Most Visit Place
          </Text>
        </View>
        <FlatList
          data={mostVist}
          renderItem={rendervistPlace}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            paddingHorizontal: normalize(12),
          }}>
          <Text style={[Styles.exploreText, {marginTop: normalize(8)}]}>
            Famous Temple Place
          </Text>
        </View>
        <FlatList data={temple} 
        renderItem={renderTemple} 
        keyExtractor={key => key.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  textInputConatiner: {
    paddingHorizontal: normalize(10),
    borderRadius: normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    // marginVertical: normalize(10),
    marginTop: normalize(20),
    marginHorizontal: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputTxt: {
    fontSize: normalize(14),
    width: normalize(260),
    fontWeight: '600',

    height: normalize(40),
    color: 'gray',
  },
  categoryImage: {
    // resizeMode: 'contain',
    width: normalize(180),
    height: normalize(120),
    borderRadius: normalize(5),
  },
  categoryConatiner: {
    backgroundColor: Color.White,
    padding: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // height: normalize(180),
    margin: normalize(10),
    borderRadius: normalize(5),
  },
  categoryPlace: {
    color: Color.black,
    fontSize: normalize(15),
    fontWeight: '600',
    marginVertical: normalize(10),
  },
  exploreText: {
    color: Color.black,
    fontSize: normalize(15),
    fontWeight: '600',
  },
});
