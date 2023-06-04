import { View, Text } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View>
      <View style={Styles.ButtonContiner}>
          <TouchableOpacity style={Styles.button}
          onPress={()=> props.navigation.navigate('Register')}
          >
            <Text style={{
              color:Color.White,
              fontSize:normalize(15)
            }}>Register</Text>
          </TouchableOpacity>
         
        </View>
    </View>
  )
}

export default Button