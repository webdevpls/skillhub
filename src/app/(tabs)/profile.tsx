import { View, Text } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'

export default function index() {
  return (
    <View className='flex-1 items-center justify-center'>

      <Text className='color-black'>PROFILE</Text>
       <Buttons
      href='/login'
      title='voltar'
     />
    </View>
  )
}