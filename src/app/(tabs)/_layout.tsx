import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Tabs, useNavigation } from 'expo-router'

import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons'





export default function _layout() {

  const navigation = useNavigation();



  return (




    <Tabs screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,

      tabBarStyle:{
        backgroundColor: '#040011',
        
        height: 70,
        
      }
    }}>
        <Tabs.Screen
        
        name='home'
        options={{
          headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='home' size={size} color={color}/>
        }}
        />

        <Tabs.Screen
        name='search'
        options={{
          headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='search' size={size} color={color}/>
        }}
        />

        <Tabs.Screen
        name='chat'
        options={{
          
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => ( // Utiliza uma função para permitir estilização do título
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Kenari IA</Text>
          ),
          headerRight: () => ( // Define o componente à direita do cabeçalho
            <MaterialCommunityIcons
              name='robot-excited'
              size={34}
              color='white'
              style={{ marginRight: 20,  }}
            />
          ),
          headerLeft: () => ( // Define o componente à direita do cabeçalho

          // eslint-disable-next-line react/jsx-no-bind
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <AntDesign
              name='leftsquare'
              size={34}
              color='white'
              style={{ marginLeft: 20,  }}
            />
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 125, // Define a altura do cabeçalho
            backgroundColor: '#040011', // Cor de fundo do cabeçalho
            
          },
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='robot-excited' size={size} color={color}/>
        }}
        
        />
        

      <Tabs.Screen
        name='save'
        options={{
          headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='bookmark' size={size} color={color}/>
        }}
        />

      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name='person' size={size} color={color}/>
        }}
        />



    </Tabs>
  )
}