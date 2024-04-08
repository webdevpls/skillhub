import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'

export default function Home() {
  return (

    <ImageBackground source={require('@/assets/bg.png')} className='flex-1 bg-cover'>
    <View className='flex-1 items-center justify-center'>
       <Buttons
      href='/login'
      title='voltar'
     />
    </View>
    </ImageBackground>
  )
}