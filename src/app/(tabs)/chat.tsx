import { View, Text, SafeAreaView, StatusBar, ImageBackground } from 'react-native'
import React from 'react'

export default function Chat() {
  return (
    <>
    
    <StatusBar barStyle="light-content" />
    <ImageBackground source={require('@/assets/bg.png')} className='flex-1 bg-cover'>
    <View className='items-center'>
      <Text className='text-white mt-5'>Chat</Text>
    </View>
    </ImageBackground>



    </>
  )
}