import { View, Text, Image, ImageBackground, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Buttons from '@/components/buttons'
import { Input } from '@/components/input'

import { Ionicons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import LoginButtons from '@/components/loginButton'
import { Link } from 'expo-router'



export default function Login() {
  return (

    <ImageBackground source={require('@/assets/bg.png')} className='flex-1 bg-cover'>

    <View className='flex-1 flex items-center justify-center'>
      
      <Text className='font-bold text-6xl color-white'>../Login</Text>
     
    <View className='pt-14 p-4 gap-5'>
      <Input>
        <Ionicons name='mail' size={20} color={colors.inputfont}/>
        <Input.Field placeholder='Seuemail@gmai.com'/>
      </Input>

      <Input>
        <Ionicons name='key' size={20} color={colors.inputfont}/>
        <Input.Field secureTextEntry placeholder='Sua senha'/>
        <Ionicons name='eye' size={20} color={colors.inputfont}/>
      </Input>

      

      <TouchableOpacity>
      <Text className='text-[#7D7D7D] ml-64'>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    <LoginButtons
    href='/(tabs)/home'
    title='Login'
    />

        <View className='flex items-center'>
          <Text className='text-[#7D7D7D]'> Ou faça login usando</Text>
        </View>

    <View className='flex-row justify-between'>
    
    <TouchableOpacity className='bg-white w-48 h-14 items-center justify-center rounded-md'>
      <Ionicons name='logo-google' color={colors.primary} size={20} />
    </TouchableOpacity>

    <TouchableOpacity className='bg-white w-48 items-center justify-center rounded-md'>
      <Ionicons name='logo-facebook' color={colors.primary} size={20} />
    </TouchableOpacity>

    </View>

  </View>
      
    


    </View>
    </ImageBackground>
    
  )
}