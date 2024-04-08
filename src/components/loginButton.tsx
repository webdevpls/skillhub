import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type ButtonProps ={
    href: string
    title: string
    onPress: () => void

}
export default function LoginButtons({href, title, onPress}: ButtonProps) {
  return (
    <Link href={href} asChild>
    <TouchableOpacity onPress={onPress} className='bg-white rounded-md w-[350] h-14 items-center justify-center'>
        <Text className='font-bold color-[#040011]'>{title}</Text>
    </TouchableOpacity>
    </Link>
  )
}