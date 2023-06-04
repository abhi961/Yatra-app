import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Src/Component/Navigation/Navigation'
import { AppRegistry } from 'react-native';
import { LogBox } from 'react-native';
export default function App() {
  LogBox.ignoreLogs([])
  return (
     <Navigation />
  )
}