import { View, Text } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'

export default function Save() {
  return (
    <View className='flex-1 items-center justify-center'>
       <Buttons
      href='/login'
      title='voltar'
     />
    </View>
  )
}