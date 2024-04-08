import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'


export default function Register() {
  return (

    <ImageBackground source={require('@/assets/bg-signup.png')} className='flex-1 bg-cover'>

    <View className='flex-1 flex items-center justify-center'>
      
      <Text className='font-bold text-6xl color-white'>../Register</Text>
     
     <View className='row gap-3 absolute bottom-0 mb-20'>
     <Buttons 
     href='/'
     title='Voltar'
     />
    </View>
      
    </View>
    </ImageBackground>
    
  )
}