import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {IMAGES, Icons} from '../Images/Icons';
import {normalize} from '../Utities/noralize';
import {Color} from '../Utities/Color';

const PlaceDetails = props => {
  const route = useRoute();
  console.log(route.params, '');
  const [selectHeart, setSelectHeart] = useState(false);

  const profile = [
    {
      image: require('../../assets/images/Sweet-girl.jpg'),
    },
    {
      image: require('../../assets/images/profile1.jpeg'),
    },
    {
      image: require('../../assets/images/saree-girl.jpg'),
    },
    {
      image: require('../../assets/images/Sweet-girl.jpg'),
    },
  ];

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground source={IMAGES.banner} style={styles.bannerImage}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: normalize(15),
                marginVertical: normalize(20),
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.backImageCircle}>
                <Image source={Icons.back} style={styles.BackImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectHeart(!selectHeart)}>
                <Image
                  source={selectHeart ? Icons.heartdark : Icons.heartLight}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(20),
                    height: normalize(20),
                    tintColor: 'red',
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              marginHorizontal: normalize(15),
            }}>
            <Text style={styles.detailsText}>Badri Nath Temple</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={Icons.Loaction} style={styles.locationImage} />
              <Text style={styles.subTitle}>Chamoli UttaraKhand</Text>
            </View>
            <Text style={styles.ParagraphText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur lobortis purus, in eleifend sem tristique a. Phasellus
              mollis diam at nunc suscipit tempor. Sed convallis libero sit amet
              metus
            </Text>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Image source={Icons.Message} style={styles.infoIcon} />
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: '700',
                    marginLeft: normalize(5),
                    fontSize: normalize(13),
                  }}>
                  johnNutt@gmail.com
                </Text>
              </View>
              <View style={styles.info}>
                <Image source={Icons.Phone} style={styles.infoIcon} />
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: '700',
                    marginLeft: normalize(5),
                    fontSize: normalize(13),
                  }}>
                  +91 98524178952
                </Text>
              </View>
            </View>
            <View style={styles.contactInfo}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: normalize(5),
                }}>
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: '600',
                  }}>
                  Price
                </Text>
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: 'bold',
                  }}>
                  Rs. 2400
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: '600',
                  }}>
                  Rating
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                    marginTop: normalize(5),
                  }}>
                  <Image
                    source={Icons.Star}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(13),
                      height: normalize(13),
                      tintColor: Color.pinkdark,
                    }}
                  />
                  <Image
                    source={Icons.Star}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(13),
                      height: normalize(13),
                      tintColor: Color.pinkdark,
                    }}
                  />
                  <Image
                    source={Icons.Star}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(13),
                      height: normalize(13),
                      tintColor: Color.pinkdark,
                    }}
                  />
                  <Image
                    source={Icons.Star}
                    style={{
                      resizeMode: 'contain',
                      width: normalize(13),
                      height: normalize(13),
                      tintColor: Color.light,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Color.DrakGray,
                    fontWeight: '600',
                  }}>
                  Reviews
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: normalize(5),
                  }}>
                  {profile.map(item => {
                    return (
                      <Image
                        source={item.image}
                        style={{
                          width: normalize(15),
                          height: normalize(15),
                          resizeMode: 'contain',
                          borderRadius: 30,
                        }}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
            <Text
              style={{
                color: Color.DrakGray,
                fontSize: normalize(14),
                fontWeight: 'bold',
                marginTop: normalize(14),
              }}>
              Facilities
            </Text>

            <View style={styles.facilityContainer}>
              <View style={styles.facilityimageContainer}>
                <Image
                  source={Icons.Wifi}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(22),
                    height: normalize(22),
                    tintColor: Color.pinkdark,
                  }}
                />
              </View>
              <View style={styles.facilityimageContainer}>
                <Image
                  source={Icons.Food}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(22),
                    height: normalize(22),
                    tintColor: Color.pinkdark,
                  }}
                />
              </View>
              <View style={styles.facilityimageContainer}>
                <Image
                  source={Icons.Drink}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(22),
                    height: normalize(22),
                    tintColor: Color.pinkdark,
                  }}
                />
              </View>
              <View style={styles.facilityimageContainer}>
                <Image
                  source={Icons.Parking}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(22),
                    height: normalize(22),
                    tintColor: Color.pinkdark,
                  }}
                />
              </View>
              <View style={styles.facilityimageContainer}>
                <Image
                  source={Icons.Swim}
                  style={{
                    resizeMode: 'contain',
                    width: normalize(22),
                    height: normalize(22),
                    tintColor: Color.pinkdark,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
            onPress={()=> props.navigation.navigate('Book')}
              style={{
                backgroundColor: Color.pinkdark,
                padding: normalize(12),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: normalize(20),
                marginTop: normalize(20),
                borderRadius: normalize(10),
              }}>
              <Text
                style={{
                  color: Color.White,
                  fontWeight: '600',
                }}>
                Book on Experiences
              </Text>
            </TouchableOpacity>
            {/* End Container */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: normalize(300),
    resizeMode: 'contain',
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
  BackImage: {
    width: normalize(10),
    height: normalize(10),
  },
  backImageCircle: {
    borderColor: Color.black,
    borderWidth: 1,
    width: normalize(22),
    height: normalize(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(30),
  },
  wishListIcon: {
    resizeMode: 'contain',
    width: normalize(20),
    height: normalize(20),
  },
  detailsText: {
    color: Color.black,
    fontSize: normalize(15),
    marginVertical: normalize(10),
  },
  locationImage: {
    resizeMode: 'contain',
    width: normalize(16),
    height: normalize(16),
    margin: 0,
    tintColor: Color.pinkdark,
  },
  subTitle: {
    color: Color.black,
    fontSize: normalize(13),
    marginLeft: normalize(5),
  },
  ParagraphText: {
    color: Color.DrakGray,
    marginTop: normalize(10),
    fontSize: normalize(14),
    textAlign: 'justify',
    lineHeight: normalize(18),
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
    tintColor: Color.pinkdark,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  facilityContainer: {
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(10),
  },
  facilityimageContainer: {
    width: normalize(40),
    height: normalize(40),
    backgroundColor: '#fbeaef',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(60),
  },
});
