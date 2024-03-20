import { View, Text, TouchableOpacity, TextStyle } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { FontAwesome, Ionicons } from "@expo/vector-icons"

type HrefProps ={
    href: string
    title: string
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    iconColor?: string; // Prop para a cor do ícone, opcional
    iconSize?: number; // Prop para o tamanho do ícone, opcional
    textColor?: string; // Prop para a cor do texto, opcional
}
export default function SocialButton({href, title, iconName, iconColor, iconSize, textColor}: HrefProps) {

  const iconStyle: TextStyle = {
    color: iconColor || 'black', // Usar a cor fornecida ou preto como padrão
    fontSize: iconSize || 20 // Usar o tamanho fornecido ou 20 como padrão
  };

  const textStyle: TextStyle = {
    fontWeight: 'bold',
    color: textColor || '#040011', // Usar a cor fornecida ou uma cor padrão
  };

  return (
    <Link href={href} asChild>
    <TouchableOpacity className='bg-white rounded-md w-48 h-14 items-center justify-center flex-row gap-2'>
    <Ionicons name={iconName} size={iconStyle.fontSize} color={iconStyle.color} />
        <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
    </Link>
  )
}