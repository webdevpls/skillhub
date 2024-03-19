import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'


export default function Welcome() {
 
  return (

    

    <ImageBackground source={require('@/assets/bg-login.png')} className='flex-1 bg-cover'>

    <View className='flex-1 flex items-center justify-center'>
      
      <Text className='font-bold text-6xl color-white'>../Hello World</Text>
     
     <View className='row gap-3 absolute bottom-0 mb-20'>
   
     <Buttons
     href='/login'
     title='LOGIN'
     />

     <Buttons
     href='/register'
     title='CADASTRE-SE'
     />
     
    </View>
      
    </View>
    </ImageBackground>
    
  )
}