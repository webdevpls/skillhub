import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen
        name='home'
        options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='home' size={size} color={color}/>
        }}
        />

        <Tabs.Screen
        name='chat'
        options={{
            tabBarLabel: 'Chat',
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='chatbox' size={size} color={color}/>
        }}
        />

    </Tabs>
  )
}