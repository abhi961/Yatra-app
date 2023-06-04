import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../Images/Icons';
import Home from '../screen/Home';
import Discover from '../screen/Discover';
import Favourite from '../screen/Favourite';
import Profile from '../screen/Profile';
import normalize from '../Utities/noralize';
import {Color} from '../Utities/Color';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.pinkdark,
       
        tabBarStyle: {
          height: 66,
          paddingBottom: 10,
          paddingTop:14,
          
          // paddingTop: 10,
          // position: 'absolute',
          // // bottom: 10,
          // borderRadius: 30,
          // marginHorizontal: 10,
          shadowColor: '#cc0052',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.18,
          shadowRadius: 4.59,
          elevation: 5,
          // tabBarActiveTintColor:'green'
          
        },
      }}
      >
      <Tab.Screen
        // tabBarActiveTintColor='red'
        name="Home"
        component={Home}
        options={{
         
          // tabBarShowLabel: true,
          // tabBarActiveTintColor:'#000',
          tabBarIcon: ({focused, size}) => (
            <Image
              source={focused ? Icons.homeDrak : Icons.homeLight}
              style={{
                resizeMode: 'contain',
                width: 23,
                height: 23,
                tintColor: focused ? Color.pinkdark : Color.pinkdark,
                // transform: [focused ? {rotate: '45deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          // tabBarShowLabel: false,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={focused ? Icons.Favourite : Icons.favouteLite}
              style={{
                resizeMode: 'contain',
                width: 23,
                height: 23,
                tintColor: focused ? Color.pinkdark : Color.pinkdark,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          // tabBarShowLabel:{{}},

          tabBarIcon: ({focused, size}) => (
            <Image
              source={focused ? Icons.discoverdark : Icons.discoverLight}
              style={{
                resizeMode: 'contain',
                width: 23,
                height: 23,
                tintColor: focused ? Color.pinkdark : Color.pinkdark,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarShowLabel: false,
          tabBarIcon: ({focused, size}) => (
            <Image
              source={focused ? Icons.profiledark : Icons.profileLite}
              style={{
                resizeMode: 'contain',
                width: 23,
                height: 23,
                tintColor: focused ? Color.pinkdark : Color.pinkdark,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create();

export default TabNav;
