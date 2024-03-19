import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type HrefProps ={
    href: string
    title: string
}
export default function LoginButtons({href, title}: HrefProps) {
  return (
    <Link href={href} asChild>
    <TouchableOpacity className='bg-white rounded-md w-[350] h-14 items-center justify-center'>
        <Text className='font-bold color-[#040011]'>{title}</Text>
    </TouchableOpacity>
    </Link>
  )
}