import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import Login from '../screen/Login'
import Register from '../screen/Register'
import OnBoard from '../screen/OnBoard'
import ReceviedOtp from '../screen/ReceviedOtp'
import Home from '../screen/Home'
import TabNav from './TabNav'
import PlaceDetails from '../screen/PlaceDetails'
import Book from '../screen/Book'


export default function Navigation(props) {
    const Stack = createNativeStackNavigator();
    const Screens = {
      OnBoard:OnBoard,
      Register:Register,
      Login:Login,
      Home:TabNav,
      PlaceDetails:PlaceDetails,
      Book:Book
      
    }
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        {Object.entries({
          ...Screens,
        }).map(([name,Component])=>{
          return <Stack.Screen name={name} component={Component} />
        })
        }
         {/* <Stack.Screen name='OnBoard' component={OnBoard} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Login' component={Login} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}